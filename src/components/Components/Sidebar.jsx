import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarContent = () => {
  return (
    <div>
      <div className="mt-6">
        {["Home", "About", "Services"].map((item, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="border-b-0">
              <AccordionTrigger>{item}</AccordionTrigger>
              <AccordionContent>
                <Link href={`/${item.toLowerCase()}`}>
                  <a className="block rounded px-4 py-2.5 transition duration-200 hover:bg-cyan-900">{item}</a>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet isOpen={isOpen} onOpenChange={setIsOpen}>
        <div className="mt-5 flex md:hidden">
          <div className="flex flex-1">
            <span className="text-2xl font-extrabold">MyApp</span>
          </div>
          <SheetTrigger>
            <button onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon size={24} />
            </button>
          </SheetTrigger>
        </div>
        <SheetContent side="left">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="container h-screen flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-screen w-full shrink-0 border-r md:sticky md:block">
          <div className="h-full py-6 pl-8 pr-6 lg:py-8">
            <SidebarContent />
          </div>
        </aside>
        {/* Main Content */}
        <div className="p-10">
          <p>Dashboard Content</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
