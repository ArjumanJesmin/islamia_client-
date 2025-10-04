import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import Link from "next/link";

const ContactCTA = () => {
    return (
        <section className="text-center">
            <Card className="bg-gradient-to-r from-school-primary to-school-secondary dark:from-school-primary/90 dark:to-school-secondary/90 text-white dark:text-gray-100 shadow-2xl rounded-3xl overflow-hidden border-0">
                <CardContent className="pt-16 pb-16 px-8 relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white dark:bg-gray-800 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white dark:bg-gray-800 rounded-full translate-x-24 translate-y-24"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                        {/* Heading */}
                        <h3 className="text-4xl font-bold mb-6 text-white dark:text-gray-100">
                            আরও তথ্য প্রয়োজন?
                        </h3>
                        
                        {/* Description */}
                        <p className="mb-8 opacity-90 text-xl max-w-2xl mx-auto leading-relaxed text-white/90 dark:text-gray-200">
                            আমাদের একাডেমিক বিষয়ে আরও বিস্তারিত জানতে সরাসরি যোগাযোগ করুন। আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত।
                        </p>
                        
                        {/* Button */}
                        <Button 
                            asChild 
                            size="lg" 
                            variant="secondary" 
                            className="bg-white dark:bg-gray-800 text-school-primary dark:text-school-secondary hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold rounded-2xl px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-600"
                        >
                            <Link href="/contact" className="flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                যোগাযোগ করুন
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default ContactCTA;