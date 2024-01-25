import SectionHeader from "./section-header";
import Button from "./ui/button";
import { BiPaperPlane } from "react-icons/bi";
import LightBulbAnimation from "./animated-illustrations/light-bulb";

const ContactSection = () => {
  return (
    <section className="bg-bg-purple" id="contact">
      <div className="container py-24 px-4 flex flex-col md:flex-row items-start gap-6">
        <LightBulbAnimation className="text-white"/>
        <form className="space-y-6 w-full">
          <SectionHeader textVariant="light">
            Get in touch with me
          </SectionHeader>
          <div className="flex flex-col space-y-1">
            <label className="text-light-foreground" htmlFor="name">
              Your Name
            </label>
            <input
              className="h-10 rounded-xl bg-white p-2"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-light-foreground" htmlFor="email">
              Email Address
            </label>
            <input
              className="h-10 rounded-xl bg-white p-2"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-light-foreground" htmlFor="message">
              Message
            </label>
            <textarea
              className="resize-none bg-white rounded-xl p-2"
              name="message"
              id="message"
              cols={30}
              rows={10}
            />
          </div>
          <Button className="bg-slate-950 text-light-foreground w-1/2 justify-center">
            <BiPaperPlane size={30} /> SEND
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
