import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { postcodePattern } from "@/pages/member/[postcode]";

export default function MemberFinder({ isForm }) {
  const [postcode, setPostcode] = useState("");

  const onPostcodeChange = event => {
    setPostcode(event.target.value);
  };

  const content = <>
    <div className="flex flex-wrap items-center gap-4">
      <Label htmlFor="postcode" value="My postcode is" className="flex-none mx-auto" />
      <TextInput id="postcode"
        className="flex-1 min-w-[8rem]"
        type="text" 
        placeholder="e.g. 3000"
        pattern={postcodePattern.source}
        title="Please enter a valid Australian postcode e.g. 2000"
        required={true}
        disabled={false}
        value={postcode}
        onChange={onPostcodeChange}
      />
    </div>
  </>

  // default to a form
  if (isForm === undefined) {
    isForm = true;
  }

  if (isForm) {
    return (
      <>
        <form action={`/member/${postcode}`} className="flex flex-col gap-4">
          {content}
          <Button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Search
          </Button>
        </form>
      </>
    );
  } else {
    return (
      <>
        {content}
      </>
    );
  }
}