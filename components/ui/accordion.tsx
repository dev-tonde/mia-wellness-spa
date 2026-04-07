"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useId, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  content: ReactNode;
  id?: string;
  title: string;
};

type AccordionProps = {
  allowMultiple?: boolean;
  className?: string;
  defaultOpenItems?: number[];
  items: readonly AccordionItem[];
};

export function Accordion({
  allowMultiple = true,
  className,
  defaultOpenItems = [],
  items,
}: AccordionProps) {
  const generatedId = useId();
  const [openIndices, setOpenIndices] = useState<number[]>(defaultOpenItems);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const openSet = useMemo(() => new Set(openIndices), [openIndices]);

  function toggleItem(index: number) {
    setOpenIndices((current) => {
      const isOpen = current.includes(index);

      if (allowMultiple) {
        return isOpen ? current.filter((item) => item !== index) : [...current, index];
      }

      return isOpen ? [] : [index];
    });
  }

  function focusButton(index: number) {
    buttonRefs.current[index]?.focus();
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusButton((index + 1) % items.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusButton((index - 1 + items.length) % items.length);
        break;
      case "Home":
        event.preventDefault();
        focusButton(0);
        break;
      case "End":
        event.preventDefault();
        focusButton(items.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const itemId = item.id ?? `${generatedId}-item-${index}`;
        const buttonId = `${itemId}-button`;
        const panelId = `${itemId}-panel`;
        const isOpen = openSet.has(index);

        return (
          <section
            className="rounded-[1.5rem] border border-white/70 bg-off-white/72 shadow-soft"
            key={item.id ?? item.title ?? itemId}
          >
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 rounded-[1.5rem] px-5 py-5 text-left transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6"
                id={buttonId}
                onClick={() => toggleItem(index)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={(element) => {
                  buttonRefs.current[index] = element;
                }}
                type="button"
              >
                <span className="pr-4 font-medium text-charcoal">{item.title}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-charcoal/10 bg-white/70 text-xl text-charcoal transition duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden px-5 transition-[grid-template-rows,opacity,padding] duration-300 ease-out sm:px-6",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] pb-0 opacity-80",
              )}
              id={panelId}
              role="region"
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-charcoal/8 pt-4 text-sm leading-7 text-charcoal/72">
                  {item.content}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
