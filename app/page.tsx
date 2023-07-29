import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <TypographyH2>
        Welcome to T4SG <span className="text-green-400">Biodiversity Hub</span>!
      </TypographyH2>
      <TypographyP>
        Biodiversity Hub is a web-app that allows users to post information about different species and stay educated on
        biodiversity across the globe. Users sign into the app and add cards that contain data on the species&apos;
        name, geographic location, population, and more.
      </TypographyP>
      <TypographyP>To see the species page, log in in the top right!</TypographyP>
      <Separator className="my-4" />
      <TypographyP>
        Biodiversity Hub was created as an example webapp for T4SG&apos;s Fall 2023 applications. Check out the
        deliverable instructions below:
      </TypographyP>
      <Button className="mt-5">
        <Icons.page className="mr-3 h-5 w-5" />
        {/*Replace with link to deliverable instructions*/}
        <a href="https://socialgood.hcs.harvard.edu/" target="_blank">
          Open Deliverable Instructions
        </a>
      </Button>
      <TypographyP>Good luck! We can&apos;t wait to see what you create :)</TypographyP>
    </>
  );
}
