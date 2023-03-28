import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card } from 'flowbite-react'
import MemberFinder from '@/components/MemberFinder'
import React, { useState } from "react";
import HeadTag from '@/components/HeadTag'

export const PARAM_NAME_POSTCODE = "postcode";

export default function Find() {
  return (
    <>
      <HeadTag title="Find my member" />
      <div className='min-h-screen flex flex-col'>
        <Header path="/member/find" />
        <div className='bg-blue-100 flex flex-wrap flex-1 justify-center items-center px-4 py-4 lg:px-32'>
          <Card className="">
            <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Find your member
            </h5>
            <MemberFinder />
          </Card>
        </div>
        <Footer className="" />
      </div>
    </>
  )
}