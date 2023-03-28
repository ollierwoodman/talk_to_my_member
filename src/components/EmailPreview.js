import { Textarea, Label } from "flowbite-react";
import React from "react";

export default function EmailPreview({recipient, subject, body}) {
  const bodyPlaceholder = `I. Introduction
      Brief greeting, addressing the representative by their title
      Introduce yourself and state the purpose of your email: to express your support for a particular policy and to urge them to take action on it

    II. Background
      Provide context and background information about the policy
      Explain why this policy is important to you and how it would benefit the community

    III. Supporting Evidence
      Provide evidence to support your argument, such as statistics or personal anecdotes
      Explain how this policy aligns with the representative's values and party platform

    IV. Call to Action
      Clearly state what action you would like the representative to take
      Explain how their action would benefit the community and why it is important

    V. Conclusion
      Thank the representative for their time and consideration
      Provide your contact information (name, address and perhaps a phone number)
      End with a polite closing.`

  let content = body ? body : bodyPlaceholder;

  return (
    <>
      <Label htmlFor="emailbody" value="Email body" hidden />
      <Textarea
        id="emailbody"
        className="whitespace-pre-line flex-1"
        placeholder="Email content will appear here..."
        value={content}
        disabled={true}
      />
    </>
  );
}
