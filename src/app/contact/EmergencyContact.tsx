import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientText } from "../Components/ui/gradient-text";
import { MessageCircle, Phone, School } from "lucide-react";

const EmergencyContact = () => {
    return (
        <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 overflow-hidden ">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 w-full"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                    <School className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <GradientText
                    variant="accent"
                    size="2xl"
                    weight="bold"
                    align="left"
                    responsive={false}
                  >
                    জরুরি যোগাযোগ
                  </GradientText>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-muted-foreground text-xs text-center mb-3">
                  জরুরি প্রয়োজনে সরাসরি যোগাযোগ করুন
                </p>

                <div className="space-y-4">
                  <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-orange-200 dark:border-orange-800">
                    <div className="flex flex-col gap-3">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          প্রধান শিক্ষক
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          সরাসরি যোগাযোগ
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="tel:+8801712345678"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 text-xs text-center"
                          title="কল করুন"
                        >
                          <Phone className="w-3 h-3 inline mr-1" />
                          কল
                        </a>
                        <a
                          href="sms:+8801712345678"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 text-xs text-center"
                          title="এসএমএস পাঠান"
                        >
                          <MessageCircle className="w-3 h-3 inline mr-1" />
                          এসএমএস
                        </a>
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="tel:+8801712345678"
                        className="text-school-primary font-bold text-sm hover:underline block text-center bg-white dark:bg-gray-800 py-2 rounded-lg border border-orange-200 dark:border-orange-800"
                      >
                        +৮৮০ ১৭১২-৩৪৫৬৭৮
                      </a>
                    </div>
                  </div>

                  <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-orange-200 dark:border-orange-800">
                    <div className="flex flex-col gap-3">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          সহকারী প্রধান
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          সরাসরি যোগাযোগ
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="tel:+8801812345678"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 text-xs text-center"
                          title="কল করুন"
                        >
                          <Phone className="w-3 h-3 inline mr-1" />
                          কল
                        </a>
                        <a
                          href="sms:+8801812345678"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 text-xs text-center"
                          title="এসএমএস পাঠান"
                        >
                          <MessageCircle className="w-3 h-3 inline mr-1" />
                          এসএমএস
                        </a>
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="tel:+8801812345678"
                        className="text-school-primary font-bold text-sm hover:underline block text-center bg-white dark:bg-gray-800 py-2 rounded-lg border border-orange-200 dark:border-orange-800"
                      >
                        +৮৮০ ১৮১২-৩৪৫৬৭৮
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
    );
};

export default EmergencyContact;