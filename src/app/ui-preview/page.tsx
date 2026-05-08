import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Textarea,
} from "@/components/ui";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/shared";

export default function UiPreviewPage() {
  return (
    <main className="bg-background pt-[90px] text-foreground">
      <Section spacing="tight">
        <Container size="default" className="grid gap-8">
          <SectionHeading
            eyebrow="Internal Validation"
            heading="UI System Preview"
            description="Temporary route for validating tokens, spacing rhythm, typography hierarchy, surfaces, and primitive interaction quality."
          />
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="default" className="grid gap-6">
          <SectionHeading
            eyebrow="Typography"
            heading="Hierarchy Check"
            description="Uppercase heading hierarchy and readable body rhythm should remain consistent across tactical dark surfaces."
          />
          <div className="grid gap-3 rounded-lg border border-border bg-surface p-6">
            <h1 className="text-heading-display text-4xl md:text-5xl">Display Heading</h1>
            <h2 className="text-heading-section text-3xl md:text-4xl">Section Heading</h2>
            <h3 className="text-heading-section text-2xl">Subsection Heading</h3>
            <p className="text-body-readable max-w-3xl">
              Every component should maintain high legibility, strong trust tone, and restrained
              accent usage while preserving semantic structure for accessibility and SEO-safe
              rendering.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="default" className="grid gap-6">
          <SectionHeading
            eyebrow="Actions"
            heading="Buttons, Badges, Dialog"
            description="Interaction states should feel sharp and controlled without decorative motion."
          />

          <Card surface="base">
            <CardHeader>
              <CardTitle>Buttons and Badge Variants</CardTitle>
              <CardDescription>
                Validate contrast, hierarchy, and focus ring visibility.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" size="icon" aria-label="Icon button">
                  +
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="subtle">Subtle</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" size="sm" />}>
                  Open Dialog Preview
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Interaction Quality Check</DialogTitle>
                    <DialogDescription>
                      Focus behavior, spacing, and text hierarchy should remain consistent with the
                      shared primitive system.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter showCloseButton>
                    <Button variant="primary" size="sm">
                      Confirm
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="default" className="grid gap-6">
          <SectionHeading
            eyebrow="Forms"
            heading="Input and Textarea"
            description="Form primitives should stay neutral, reusable, and highly legible in dark tactical surfaces."
          />

          <Card surface="elevated">
            <CardContent className="grid gap-4 pt-5">
              <div className="grid gap-2">
                <label htmlFor="preview-name" className="text-heading-section text-base md:text-lg">
                  Name
                </label>
                <Input id="preview-name" placeholder="Client name placeholder" />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="preview-notes"
                  className="text-heading-section text-base md:text-lg"
                >
                  Session Notes
                </label>
                <Textarea
                  id="preview-notes"
                  placeholder="Structured placeholder for consultation context, style direction, and placement constraints."
                />
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="default" className="grid gap-6">
          <SectionHeading
            eyebrow="Disclosure"
            heading="Accordion"
            description="Accordion primitives should maintain clear hierarchy and keyboard-safe interaction."
          />
          <Card surface="strong">
            <CardContent className="pt-5">
              <Accordion defaultValue={["tokens"]}>
                <AccordionItem value="tokens">
                  <AccordionTrigger>Token Consistency</AccordionTrigger>
                  <AccordionContent>
                    Semantic tokens should drive every reusable primitive so future visual evolution
                    does not require widespread component rewrites.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="spacing">
                  <AccordionTrigger>Spacing Rhythm</AccordionTrigger>
                  <AccordionContent>
                    Section and content spacing utilities should preserve cinematic breathing room
                    while keeping dense proof-oriented layouts readable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accessibility">
                  <AccordionTrigger>Accessibility Baseline</AccordionTrigger>
                  <AccordionContent>
                    Focus rings, semantic heading structure, readable contrast, and keyboard-safe
                    interactions are required from the primitive layer upward.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="default" className="grid gap-6">
          <SectionHeading
            eyebrow="Layout Validation"
            heading="Container Widths and Surface Ladder"
            description="Quick visual checks for container scales and surface hierarchy progression."
          />

          <div className="grid gap-4">
            <Container size="narrow" className="surface-base rounded-lg p-4">
              <p className="text-body-readable">Narrow container</p>
            </Container>
            <Container size="default" className="surface-elevated rounded-lg p-4">
              <p className="text-body-readable">Default container</p>
            </Container>
            <Container size="wide" className="surface-strong rounded-lg p-4">
              <p className="text-body-readable">Wide container</p>
            </Container>
          </div>
        </Container>
      </Section>
    </main>
  );
}
