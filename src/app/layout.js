

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David Maine Dev",
  description: "Powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
  <html lang="en">
   <body className="flex ">
      <nav className="flex items-center justify-center sm:justify-normal w-screen sm:flex-col justify-around h-[100px] bg-slate-100 text-blue fixed sm:w-150px sm:w-[200px] sm:h-screen sm:bg-purple">
        <div>
          <div className="sm:mt-20 flex justify-center">
            <Drawer>
              <DrawerTrigger className="bg-black text-white w-[150px] h-[35px] text-sm rounded">
                {/* <Button style={{ width: '150px' }}> */}
                  Contact Info
                {/* </Button> */}
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Let's Connect!</DrawerTitle>
                  <DrawerDescription>
                    <Button>
                      <a href="mailto:davidmainedev@gmail.com">
                        Send an email to: davidmainedev@gmail.com
                      </a>
                    </Button>
                  </DrawerDescription>
                  <DrawerDescription>
                    <Button>
                      <a href="https://www.linkedin.com/in/david-maine-548886b2/" target="_blank">
                        LinkedIn
                      </a>
                    </Button>
                  </DrawerDescription>
                  <DrawerDescription>
                    <Button>
                      <a href="https://github.com/David-Maine-Floated" target="_blank">
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
            <Button style={{ width: '150px' }}>Home</Button>
          </Link>
        </div>
        <div className="flex justify-center h-100 max-h-100 sm:mt-20">
          <Link href="projects">
            <div>
            <Button style={{ width: '150px' }}>
              Work
            </Button>
            </div>
          </Link>
        </div>
      </nav>
      <div id="app" className="flex-1">
        {children}
      </div>
    </body>
    </html>
  );
}
