import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyResumeData } from "../assets/assets/assets";
import ResumePreview from "../components/ResumePreview";
import { ArrowLeftIcon, Loader } from "lucide-react";

const Preview = () => {
  const { resumeId } = useParams();
  const [ResumeData, setResumedata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadResume = async () => {
    const foundResume =
      dummyResumeData.find((resume) => resume._id === resumeId) || null;
    setResumedata(foundResume);
    setIsLoading(false);
  };

  useEffect(() => {
    loadResume();
  }, [resumeId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin text-gray-500 w-10 h-10" />
      </div>
    );
  }

  if (!ResumeData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-center text-6xl text-slate-600 font-medium">
          Resume not found
        </p>
        <Link
          to="/"
          className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full 
          px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Go to home page
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={ResumeData}
          template={ResumeData.template}
          accentColor={ResumeData.accentColor}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  );
};

export default Preview;
