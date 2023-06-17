import { Card } from "flowbite-react";
import Link from "next/link";

export default function LegoSpinner() {
  return (
    <Card className="flex flex-col bg-gray-50 border-gray-300">
      <div className="message">
        <p className="message__line">Loading…</p>
        <p className="message__line">Building your email body…</p>
        <p className="message__line">Brick by boring brick…</p>
        <p className="message__line">Saving you time, making your change</p>
        <p className="message__line">
          Might take longer to build than the Death Star…
        </p>
        <p className="message__line">Can't be far off now…</p>
      </div>
      <div className="tower">
        <div className="tower__group">
          <div className="tower__brick-layer tower__brick-layer--4">
            <div className="tower__brick tower__brick--0">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--red">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--orange">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270 tower__brick--purple">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer--3">
            <div className="tower__brick tower__brick--45 tower__brick--magenta">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--green">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--orange">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer--2">
            <div className="tower__brick tower__brick--0 tower__brick--red">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--green">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--purple">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer--1">
            <div className="tower__brick tower__brick--45 tower__brick--purple">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135 tower__brick--magenta">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--red">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--green">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer">
            <div className="tower__brick tower__brick--0 tower__brick--move14">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--red tower__brick--move13">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--orange tower__brick--move16">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270 tower__brick--purple tower__brick--move15">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer---1">
            <div className="tower__brick tower__brick--45 tower__brick--move10 tower__brick--magenta">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135 tower__brick--move9">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--green tower__brick--move12">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--orange tower__brick--move11">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer---2">
            <div className="tower__brick tower__brick--0 tower__brick--red tower__brick--move6">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--green tower__brick--move5">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--purple tower__brick--move8">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270 tower__brick--move7">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer---3">
            <div className="tower__brick tower__brick--45 tower__brick--purple tower__brick--move2">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135 tower__brick--magenta tower__brick--move1">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--red tower__brick--move4">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--green tower__brick--move3">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="https://codepen.io/jkantner/pen/BaPaoGm"
        className="text-xs text-gray-500 text-center"
      >
        Animation by Jon Kantner
      </Link>
    </Card>
  );
}
