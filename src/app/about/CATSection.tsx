import { Button } from "@/components/ui/button";
import Link from "next/link";


const CATSection = () => {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl p-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          আপনার সন্তানকে ভর্তি করান
        </h2>
        <p className="mb-6 opacity-90">
          আমাদের প্রতিষ্ঠানে ভর্তি সম্পর্কিত তথ্যের জন্য যোগাযোগ করুন
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">যোগাযোগ করুন</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/20 text-white border-white"
          >
            <Link href="/academics">একাডেমিক তথ্য</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CATSection;
