
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button.jsx";
import PageWrapper from "@/components/ui/pageWrapper";
import { motion } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import RotationWrapper from "@/components/ui/rotationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David Maine Dev",
  description: "Powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex w-screen h-screen box-border">
        <nav className="flex items-center w-full flex-wrap justify-center sm:justify-normal sm:flex-col fixed justify-around h-[100px] bg-slate-100 text-blue  sm:w-[200px] sm:h-screen sm:bg-purple z-10">
          <div>
            <div className="sm:mt-20 flex justify-center">
              <Drawer>
                <DrawerTrigger className="text-white w-[150px] h-[35px] text-sm rounded bg-slate-700">
                  {/* <Button style={{ width: '150px' }}> */}
                  Contact Info
                  {/* </Button> */}
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Let's Connect!</DrawerTitle>
                    <DrawerDescription>
                      <Button className="bg-slate-700">
                        <a href="mailto:davidmainedev@gmail.com">
                          Send an email to: davidmainedev@gmail.com
                        </a>
                      </Button>
                    </DrawerDescription>
                    <DrawerDescription>
                      <Button className="bg-slate-700">
                        <a
                          href="https://www.linkedin.com/in/david-maine-548886b2/"
                          target="_blank"
                        >
                          LinkedIn
                        </a>
                      </Button>
                    </DrawerDescription>
                    <DrawerDescription>
                      <Button className="bg-slate-700">
                        <a
                          href="https://github.com/David-Maine-Floated"
                          target="_blank"
                        >
                          GitHub
                        </a>
                      </Button>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
            <div className="flex justify-center h-100 max-h-100 sm:mt-20">
              <Link className="" href="/">
                <Button
                  style={{ width: "150px", backgroundColor: "rgb(51 65 85)" }}
                >
                  Home
                </Button>
              </Link>
            </div>
          <div className="flex justify-center h-100 max-h-100 sm:mt-20">
            <Link href="projects">
              <div>
                <Button
                  style={{ width: "150px", backgroundColor: "rgb(51 65 85)" }}
                >
                  Work
                </Button>
              </div>
            </Link>
          </div>
          <div className="flex justify-center h-100 max-h-100 sm:mt-20">
            <Link href="music">
              <div>
                <Button
                  style={{ width: "150px", backgroundColor: "rgb(51 65 85)" }}
                >
                  Music
                </Button>
              </div>
            </Link>
          </div>
        </nav>
        <div id="app" className="flex-1 h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
