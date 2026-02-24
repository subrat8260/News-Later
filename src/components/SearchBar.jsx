import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function InputInline() {
  return (
    <Field orientation="horizontal" className="flex gap-2">
      <Input type="search" placeholder="Search..." className="flex-1" />
      <Button>Search</Button>
    </Field>
  );
}
