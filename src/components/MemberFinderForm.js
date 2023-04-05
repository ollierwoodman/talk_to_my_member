import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { POSTCODE_PATTERN } from "@/pages/member/find";

export default function MemberFinderForm() {
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
        pattern={POSTCODE_PATTERN.source}
        title="Please enter a valid Australian postcode e.g. 2000"
        required={true}
        disabled={false}
        value={postcode}
        onChange={onPostcodeChange}
      />
    </div>
  </>

  return (
    <>
      <form action={`/member/${postcode}`} className="flex flex-col gap-4">
        {content}
        <Button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          Search
        </Button>
      </form>
    </>
  );
}