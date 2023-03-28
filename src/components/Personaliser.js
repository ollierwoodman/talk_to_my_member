import { Label, TextInput, Button } from "flowbite-react";
import React from "react";

export default function Personaliser() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Label htmlFor="fullname" value="Full name" className="flex-none" />
        <TextInput
          id="fname"
          className="flex-grow"
          type="text"
          placeholder="John Citizen"
          required={false}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Label htmlFor="address" value="Residential address" className="flex-none" />
        <TextInput
          id="address"
          className="flex-grow"
          type="text"
          placeholder="123 Fake Street, Melbourne 3000"
          required={false}
        />
      </div>
      <p className="text-sm text-gray-500 text-center">We don't store or share these details with anyone.</p>
    </>
  );
}
