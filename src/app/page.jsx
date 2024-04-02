import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen mt-[50px] w-auto sm:mt-0 flex-col justify-between p-24 sm:ml-[12rem]">
      <div className="flex justify-center flex-col">
        <div className="flex ml-0 justify-evenly  flex-wrap">
          <img
            className="rounded-full w-[300px] min-w-[300px]"
            src="/david_images/david-pic.png"
            alt="Picture of me"
          />
          <div>
            <p className="text-4xl">Hello! I'm David Maine</p>
            <div className="flex justify-betweeen">
              {/* <img
                className="w-[250px] h-auto"
                src="/david_images/better-git-garden.png"
                alt=""
              /> */}
            </div>

            <p className="text-lg mt-10 max-w-[600px]">
              I'm NYC based full stack software engineer who specializes in
              React. I would love to help you build whatever it is your dreaming
              of.
            </p>
            <p className="text-lg mt-10 max-w-[600px]">
              Currently I do freelance code projects, like building websites for
              art galleries or artists. I also work at hellomusictheory.com
              where I debug the codebase, am working on a band name generator,
              and update/maintain the website.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 ">
          <div className="flex justify-center text-xl ">
            <p>Favorite Tools:</p>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <img
              className="w-[200px] h-auto"
              src="/david_images/React.png"
              alt=""
            />
            <img
              className="w-[200px] h-auto"
              src="/david_images/Redux.png"
              alt=""
            />
            <img
              className="w-[200px] h-auto"
              src="/david_images/Rails.png"
              alt=""
            />
            <img
              className="w-[200px] h-auto"
              src="/david_images/Next.js.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
