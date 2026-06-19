"use client";

import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactIntent } from "@/lib/analytics";
import { isPlaceholderLink, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const ratingValues = [1, 2, 3, 4, 5] as const;

function buildTestimonialMessage({
  comment,
  firstName,
  lastName,
  rating,
}: {
  comment: string;
  firstName: string;
  lastName: string;
  rating: number;
}) {
  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
  const ratingLine = `${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)`;

  return [
    "Website testimonial submission for Mia Wellness Spa",
    "",
    `Name: ${fullName}`,
    `Rating: ${ratingLine}`,
    "",
    "Comment:",
    comment.trim(),
    "",
    "Please review this submission before featuring it publicly on the website.",
  ].join("\n");
}

function buildWhatsappSubmissionHref(message: string) {
  return `${siteConfig.business.whatsappHref}?text=${encodeURIComponent(message)}`;
}

function buildEmailSubmissionHref(message: string) {
  const subject = encodeURIComponent("Website testimonial submission");
  const body = encodeURIComponent(message);

  return `${siteConfig.business.emailHref}?subject=${subject}&body=${body}`;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-6 w-6 transition", filled ? "fill-current" : "fill-transparent")}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3.75l2.54 5.14 5.68.83-4.11 4 .97 5.65L12 16.7l-5.08 2.67.97-5.65-4.11-4 5.68-.83L12 3.75z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

type TestimonialCardProps = {
  className?: string;
  comment: string;
  firstName: string;
  lastName: string;
  rating: number;
};

function TestimonialCard({
  className,
  comment,
  firstName,
  lastName,
  rating,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "min-w-[18rem] max-w-sm rounded-[1.75rem] border border-charcoal/8 bg-white/92 p-5 shadow-soft sm:min-w-[22rem] sm:p-6",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-800/72">
        Approved testimonial
      </p>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl leading-tight text-charcoal">
            {firstName} {lastName}
          </p>
          <p aria-label={`${rating} out of 5 stars`} className="mt-2 text-sm tracking-[0.18em] text-sage-800">
            {"★".repeat(rating)}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-charcoal/72">{comment}</p>
    </article>
  );
}

export function HomeTestimonialsSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const testimonialConfig = siteConfig.home.testimonials;
  const approvedTestimonials = testimonialConfig.published;
  const hasAnimatedTrack = approvedTestimonials.length >= 3;
  const hasGoogleReviewLink = !isPlaceholderLink(siteConfig.links.googleReviewsPage);
  const missingFields = [
    firstName.trim().length === 0 ? "first name" : null,
    lastName.trim().length === 0 ? "last name" : null,
    rating === 0 ? "star rating" : null,
    comment.trim().length === 0 ? "comment" : null,
  ].filter(Boolean) as string[];
  const animatedTestimonials = hasAnimatedTrack
    ? [...approvedTestimonials, ...approvedTestimonials]
    : approvedTestimonials;
  const animationDuration = `${Math.max(48, approvedTestimonials.length * 16)}s`;

  const testimonialMessage = useMemo(
    () =>
      buildTestimonialMessage({
        comment,
        firstName,
        lastName,
        rating,
      }),
    [comment, firstName, lastName, rating],
  );

  const isReady =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    rating > 0 &&
    comment.trim().length > 0;

  const whatsappSubmissionHref = isReady ? buildWhatsappSubmissionHref(testimonialMessage) : "#";
  const emailSubmissionHref = isReady ? buildEmailSubmissionHref(testimonialMessage) : "#";
  const pendingFieldsMessage =
    missingFields.length > 0 ? `Still needed: ${missingFields.join(", ")}.` : "";

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          description={testimonialConfig.description}
          eyebrow={testimonialConfig.eyebrow}
          title={testimonialConfig.title}
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-off-white/78 p-6 shadow-soft sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                {testimonialConfig.publishedEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                {approvedTestimonials.length > 0
                  ? testimonialConfig.publishedTitle
                  : testimonialConfig.publishedEmptyTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">
                {approvedTestimonials.length > 0
                  ? testimonialConfig.publishedDescription
                  : testimonialConfig.publishedEmptyDescription}
              </p>
            </div>

            {approvedTestimonials.length > 0 ? (
              <div className="mt-8">
                {hasAnimatedTrack ? (
                  <>
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
                      {approvedTestimonials.map((testimonial) => (
                        <TestimonialCard
                          className="snap-start"
                          comment={testimonial.comment}
                          firstName={testimonial.firstName}
                          key={`${testimonial.firstName}-${testimonial.lastName}-${testimonial.comment}`}
                          lastName={testimonial.lastName}
                          rating={testimonial.rating}
                        />
                      ))}
                    </div>
                    <div className="relative hidden overflow-hidden md:block">
                      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-off-white/94 to-transparent" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-off-white/94 to-transparent" />
                      <div
                        className="testimonial-marquee-track flex w-max gap-4 pr-4"
                        style={{ animationDuration }}
                      >
                        {animatedTestimonials.map((testimonial, index) => (
                          <TestimonialCard
                            comment={testimonial.comment}
                            firstName={testimonial.firstName}
                            key={`${testimonial.firstName}-${testimonial.lastName}-${index}`}
                            lastName={testimonial.lastName}
                            rating={testimonial.rating}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    className={cn(
                      "grid gap-4",
                      approvedTestimonials.length === 1 ? "max-w-xl" : "md:grid-cols-2",
                    )}
                  >
                    {approvedTestimonials.map((testimonial) => (
                      <TestimonialCard
                        comment={testimonial.comment}
                        firstName={testimonial.firstName}
                        key={`${testimonial.firstName}-${testimonial.lastName}-${testimonial.comment}`}
                        lastName={testimonial.lastName}
                        rating={testimonial.rating}
                      />
                    ))}
                  </div>
                )}

              </div>
            ) : (
              <div className="mt-8 rounded-[1.75rem] border border-dashed border-charcoal/12 bg-white/80 p-6">
                <p className="text-sm leading-7 text-charcoal/72">
                  {testimonialConfig.publishedEmptyNote}
                </p>
              </div>
            )}

            {hasGoogleReviewLink ? (
              <div className="mt-6">
                <ButtonLink className="w-full sm:w-auto" href={siteConfig.links.googleReviewsPage} variant="secondary">
                  {testimonialConfig.googleReviewCtaLabel}
                </ButtonLink>
              </div>
            ) : null}
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/82 p-6 shadow-soft sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                {testimonialConfig.submissionEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                {testimonialConfig.submissionTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">
                {testimonialConfig.submissionDescription}
              </p>
              <div className="mt-4 rounded-[1.5rem] border border-sage-700/12 bg-sage-50/80 p-4">
                <p className="text-sm leading-7 text-charcoal/62">{testimonialConfig.submissionNote}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-charcoal">First name</span>
                <input
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-off-white/86 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-sage-700 focus:ring-2 focus:ring-sage-700/20"
                  maxLength={80}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  required
                  type="text"
                  value={firstName}
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-charcoal">Last name</span>
                <input
                  autoComplete="family-name"
                  className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-off-white/86 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-sage-700 focus:ring-2 focus:ring-sage-700/20"
                  maxLength={80}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last name"
                  required
                  type="text"
                  value={lastName}
                />
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-charcoal">
                {testimonialConfig.ratingPrompt}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {ratingValues.map((value) => {
                  const active = rating >= value;

                  return (
                    <label
                      className={cn(
                        "inline-flex cursor-pointer items-center justify-center rounded-full border px-3 py-2 transition focus-within:ring-2 focus-within:ring-sage-700/20",
                        active
                          ? "border-sage-700 bg-sage-700 text-off-white"
                          : "border-charcoal/10 bg-off-white/86 text-charcoal hover:bg-off-white",
                      )}
                      key={value}
                    >
                      <input
                        checked={rating === value}
                        className="sr-only"
                        name="testimonial-rating"
                        onChange={() => setRating(value)}
                        type="radio"
                        value={value}
                      />
                      <span className="flex items-center gap-2">
                        <StarIcon filled={active} />
                        <span className="text-sm font-medium">{value}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <p aria-live="polite" className="mt-3 text-sm text-charcoal/58">
                {rating > 0 ? `${rating} out of 5 stars selected` : "Choose a star rating to continue"}
              </p>
            </fieldset>

            <label className="mt-6 block">
              <span className="text-sm font-medium text-charcoal">Comment</span>
              <textarea
                className="mt-2 min-h-36 w-full rounded-[1.5rem] border border-charcoal/10 bg-off-white/86 px-4 py-3 text-sm leading-7 text-charcoal outline-none transition focus:border-sage-700 focus:ring-2 focus:ring-sage-700/20"
                maxLength={600}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Share a calm, honest note about your treatment experience."
                required
                value={comment}
              />
            </label>

            <div className="mt-6 rounded-[1.5rem] border border-charcoal/8 bg-off-white/78 p-4">
              <p aria-live="polite" className="text-sm leading-7 text-charcoal/68">
                {isReady
                  ? testimonialConfig.formReadyHint
                  : `${testimonialConfig.formPendingHint} ${pendingFieldsMessage}`.trim()}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                analytics={contactIntent("home_testimonials", "whatsapp", "send_testimonial_on_whatsapp")}
                className="w-full border-sage-700/20 bg-sage-700 text-off-white hover:bg-sage-800 sm:w-auto"
                disabled={!isReady}
                href={whatsappSubmissionHref}
                variant="secondary"
              >
                {testimonialConfig.whatsappCtaLabel}
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" disabled={!isReady} href={emailSubmissionHref} variant="secondary">
                {testimonialConfig.emailCtaLabel}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-7 text-charcoal/58">{testimonialConfig.actionsHelper}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
