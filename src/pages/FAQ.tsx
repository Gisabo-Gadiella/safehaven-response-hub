import DashboardLayout from '@/components/layout/DashboardLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const FAQ = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Common questions about disaster preparedness</p>
        </div>

        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What should I include in my emergency kit?</AccordionTrigger>
              <AccordionContent>
                Your emergency kit should include water (1 gallon per person per day), non-perishable food, flashlight, radio, first aid kit, medications, and important documents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I receive emergency alerts?</AccordionTrigger>
              <AccordionContent>
                Emergency alerts are automatically sent to all registered users via the SafeHaven app, SMS, and email notifications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What should I do during different types of disasters?</AccordionTrigger>
              <AccordionContent>
                Follow the specific guidelines for each disaster type: evacuate immediately for fires, seek higher ground for floods, and take shelter for severe weather.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default FAQ