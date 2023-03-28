import { Avatar } from "flowbite-react";
import React from "react";

const emptyPlaceholder = "n/a";

function getInitials(fname, lname) {
  return (fname ? fname.charAt(0) : "") + (lname ? lname.charAt(0) : "");
}

export default function MemberDetails({ data }) {
  return (
    <>
      <div className="flex justify-center">
        <Avatar
          img={"data.mp_portrait_url"}
          placeholderInitials={getInitials(
            "data.mp_first_name",
            "data.mp_surname",
          )}
          size="xl"
        >
          <div className="font-medium dark:text-white">
            <div>
              <p>Test</p>
            </div>
          </div>
        </Avatar>
      </div>
    </>
  );
}
