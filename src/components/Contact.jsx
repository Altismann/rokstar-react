import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
        <section className="py-[100px]" id="contact">
            <div className="container">
                <SectionTitle
                    title="Kontakt"
                />

                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-5">
                        <div className="font-medium space-y-2">
                            <address className="not-italic">
                                Enlundavägen 46<br/>
                                Sverige
                            </address>
                            <p>altismann@pm.me</p>
                            <p>+(46) 0702312173</p>
                        </div>

                        
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Contact;
