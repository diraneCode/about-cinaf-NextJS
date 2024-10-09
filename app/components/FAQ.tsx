import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Accordions } from "../const/Accordion"
export default function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mb-16">
          {
            Accordions.map((accordion, index) => (
                <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger>{accordion.title}</AccordionTrigger>
                    <AccordionContent>{accordion.content}</AccordionContent>
                </AccordionItem>
            ))
          }
        </Accordion>
    );
}