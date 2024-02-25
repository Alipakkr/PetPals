import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b to-stone-600 from-fuchsia-100 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Pet pals is an online, searchable database of animals who need homes.
          It is also a directory of nearly 11,000 animal shelters and adoption
          organizations across the U.S., Canada, and Mexico. Organizations
          maintain their own home pages and available-pet databases.
        </p>
        <br />
        <h2 className="text-xl ml-8">OUR MISSION</h2>
        <p className="text-xl mt-5">
          To use Internet technology and the resources it can generate to:
        </p>

        <br />

        <p className="text-xl">
          Increase public awareness of the availability of high-quality
          adoptable pets Increase the overall effectiveness of pet adoption
          programs across North America to the extent that the euthanasia of
          adoptable pets is eliminated Elevate the status of pets to that of
          family member
        </p>
        <br />
        <p className="text-xl">
          From the comfort of their personal computers, pet lovers can search
          for a pet that best matches their needs. They can then reference a
          shelter’s web page and discover what services it offers. Petfinder
          also includes discussion forums, a pet-care resource directory and a
          library of free pet-care articles to help keep pets in their homes.
        </p>
      </div>
    </div>
  );
};
