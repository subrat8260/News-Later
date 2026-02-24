import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export function ButtonDemo({ handle, name }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 md:flex-row ">
        <Button variant="outline" onClick={() => handle()}>
          {name}
        </Button>
      </div>
    </>
  );
}
