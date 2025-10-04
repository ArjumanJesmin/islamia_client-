import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
    return (
         <>
            <Card className="border-0 shadow-2xl rounded-3xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 overflow-hidden h-full">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 w-full"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  যোগাযোগ তথ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <MapPin className="w-5 h-5 text-school-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      ঠিকানা
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      কলেজ রোড, সাতক্ষীরা সদর,
                      <br />
                      সাতক্ষীরা, বাংলাদেশ
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Phone className="w-5 h-5 text-school-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      ফোন
                    </h4>
                    <a
                      href="tel:+8801234567890"
                      className="text-muted-foreground text-xs hover:text-school-primary transition-colors"
                    >
                      +৮৮০ ১২৩৪-৫৬৭৮৯
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Mail className="w-5 h-5 text-school-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      ইমেইল
                    </h4>
                    <a
                      href="mailto:islamiagps1972@gmail.com"
                      className="text-muted-foreground text-xs hover:text-school-primary transition-colors"
                    >
                      islamiagps@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Clock className="w-5 h-5 text-school-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      কার্যকাল
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      রবি - বৃহস্পতি:
                      <br />
                      সকাল ৯:০০ - বিকাল ৪:১০
                    </p>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 py-3 text-xs"
                      asChild
                    >
                      <a
                        href="https://wa.me/8801234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-3 h-3 text-green-600" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 py-3 text-xs"
                      asChild
                    >
                      <a
                        href="https://m.me/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-3 h-3 text-blue-600" />
                        Messenger
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
    );
};

export default ContactUs;


