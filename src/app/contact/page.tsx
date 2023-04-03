import ContactForm from '@components/contact/ContactForm';
import { hostname } from '@utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
  alternates: {
    canonical: `${hostname}/contact`,
  },
};
export default async function ContactPage() {
  return (
    <div className="py-6">
      <ContactForm />
    </div>
  );
}
