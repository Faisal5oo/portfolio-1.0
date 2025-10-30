"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const SignatureCanvas = dynamic(() => import("react-signature-canvas"), {
  ssr: false,
});
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Plus } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
// import { useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function VideoSubmissionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [videoFiles, setVideoFiles] = useState([]);
  const [rawVideo, setRawVideo] = useState("");
  const [recordedVideo, setRecordedVideo] = useState(false);
  const [notUploadedElsewhere, setNotUploadedElsewhere] = useState(false);
  const [recordedBy, setRecordedBy] = useState(""); // "Me", "Friend", etc.
  const [submittedElsewhere, setSubmittedElsewhere] = useState(""); // "Yes" or "No"
  const [otherCompanyName, setOtherCompanyName] = useState("");
  const [agreed18, setAgreed18] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [exclusiveRights, setExclusiveRights] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const signRef = useRef(null);
  // const { id } = useParams();
  //  bucket name = clipflicks
  const countries = [
    { name: "Afghanistan" },
    { name: "Albania" },
    { name: "Algeria" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Antigua and Barbuda" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaijan" },
    { name: "Bahamas" },
    { name: "Bahrain" },
    { name: "Bangladesh" },
    { name: "Barbados" },
    { name: "Belarus" },
    { name: "Belgium" },
    { name: "Belize" },
    { name: "Benin" },
    { name: "Bhutan" },
    { name: "Bolivia" },
    { name: "Bosnia and Herzegovina" },
    { name: "Botswana" },
    { name: "Brazil" },
    { name: "Brunei" },
    { name: "Bulgaria" },
    { name: "Burkina Faso" },
    { name: "Burundi" },
    { name: "Cabo Verde" },
    { name: "Cambodia" },
    { name: "Cameroon" },
    { name: "Canada" },
    { name: "Central African Republic" },
    { name: "Chad" },
    { name: "Chile" },
    { name: "China" },
    { name: "Colombia" },
    { name: "Comoros" },
    { name: "Congo (Congo-Brazzaville)" },
    { name: "Congo (Congo-Kinshasa)" },
    { name: "Costa Rica" },
    { name: "Croatia" },
    { name: "Cuba" },
    { name: "Cyprus" },
    { name: "Czechia" },
    { name: "Denmark" },
    { name: "Djibouti" },
    { name: "Dominica" },
    { name: "Dominican Republic" },
    { name: "Ecuador" },
    { name: "Egypt" },
    { name: "El Salvador" },
    { name: "Equatorial Guinea" },
    { name: "Eritrea" },
    { name: "Estonia" },
    { name: "Eswatini" },
    { name: "Ethiopia" },
    { name: "Fiji" },
    { name: "Finland" },
    { name: "France" },
    { name: "Gabon" },
    { name: "Gambia" },
    { name: "Georgia" },
    { name: "Germany" },
    { name: "Ghana" },
    { name: "Greece" },
    { name: "Grenada" },
    { name: "Guatemala" },
    { name: "Guinea" },
    { name: "Guinea-Bissau" },
    { name: "Guyana" },
    { name: "Haiti" },
    { name: "Honduras" },
    { name: "Hungary" },
    { name: "Iceland" },
    { name: "India" },
    { name: "Indonesia" },
    { name: "Iran" },
    { name: "Iraq" },
    { name: "Ireland" },
    { name: "Israel" },
    { name: "Italy" },
    { name: "Jamaica" },
    { name: "Japan" },
    { name: "Jordan" },
    { name: "Kazakhstan" },
    { name: "Kenya" },
    { name: "Kiribati" },
    { name: "Kuwait" },
    { name: "Kyrgyzstan" },
    { name: "Laos" },
    { name: "Latvia" },
    { name: "Lebanon" },
    { name: "Lesotho" },
    { name: "Liberia" },
    { name: "Libya" },
    { name: "Liechtenstein" },
    { name: "Lithuania" },
    { name: "Luxembourg" },
    { name: "Madagascar" },
    { name: "Malawi" },
    { name: "Malaysia" },
    { name: "Maldives" },
    { name: "Mali" },
    { name: "Malta" },
    { name: "Mauritania" },
    { name: "Mauritius" },
    { name: "Mexico" },
    { name: "Moldova" },
    { name: "Monaco" },
    { name: "Mongolia" },
    { name: "Montenegro" },
    { name: "Morocco" },
    { name: "Mozambique" },
    { name: "Myanmar (Burma)" },
    { name: "Namibia" },
    { name: "Nauru" },
    { name: "Nepal" },
    { name: "Netherlands" },
    { name: "New Zealand" },
    { name: "Nicaragua" },
    { name: "Niger" },
    { name: "Nigeria" },
    { name: "North Korea" },
    { name: "North Macedonia" },
    { name: "Norway" },
    { name: "Oman" },
    { name: "Pakistan" },
    { name: "Palau" },
    { name: "Palestine" },
    { name: "Panama" },
    { name: "Papua New Guinea" },
    { name: "Paraguay" },
    { name: "Peru" },
    { name: "Philippines" },
    { name: "Poland" },
    { name: "Portugal" },
    { name: "Qatar" },
    { name: "Romania" },
    { name: "Russia" },
    { name: "Rwanda" },
    { name: "Saint Kitts & Nevis" },
    { name: "Saint Lucia" },
    { name: "Saint Vincent & Grenadines" },
    { name: "Samoa" },
    { name: "San Marino" },
    { name: "Sao Tome & Principe" },
    { name: "Saudi Arabia" },
    { name: "Senegal" },
    { name: "Serbia" },
    { name: "Seychelles" },
    { name: "Sierra Leone" },
    { name: "Singapore" },
    { name: "Slovakia" },
    { name: "Slovenia" },
    { name: "Solomon Islands" },
    { name: "Somalia" },
    { name: "South Africa" },
    { name: "South Korea" },
    { name: "South Sudan" },
    { name: "Spain" },
    { name: "Sri Lanka" },
    { name: "Sudan" },
    { name: "Suriname" },
    { name: "Sweden" },
    { name: "Switzerland" },
    { name: "Syria" },
    { name: "Tajikistan" },
    { name: "Tanzania" },
    { name: "Thailand" },
    { name: "Timor-Leste" },
    { name: "Togo" },
    { name: "Tonga" },
    { name: "Trinidad & Tobago" },
    { name: "Tunisia" },
    { name: "Turkey" },
    { name: "Turkmenistan" },
    { name: "Tuvalu" },
    { name: "Uganda" },
    { name: "Ukraine" },
    { name: "United Arab Emirates" },
    { name: "United Kingdom" },
    { name: "United States" },
    { name: "Uruguay" },
    { name: "Uzbekistan" },
    { name: "Vanuatu" },
    { name: "Vatican City" },
    { name: "Venezuela" },
    { name: "Vietnam" },
    { name: "Yemen" },
    { name: "Zambia" },
    { name: "Zimbabwe" },
  ];

  // const supabaseUrl = "https://xqgoqxnboybqjaqjeliq.supabase.co";
  // const supabaseAnonKey =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZ29xeG5ib3licWphcWplbGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MTM2MTQsImV4cCI6MjA1NjQ4OTYxNH0.g6zofzjCa1vzTm6Tnh0V8m3mkqqPCE1jbJ5uSlIb_is";
  // const CDNURL =
  //   "https://xqgoqxnboybqjaqjeliq.supabase.co/storage/v1/object/public/videos";

  // const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // const handleFileUpload = async (e) => {
  //   const videoFile = e.target.files[0];

  //   if (!videoFile) {
  //     console.error("No file selected");
  //     return;
  //   }

  //   setUploading(true);
  //   setUploadProgress(0);
  //   console.log("Uploading video...");

  //   const fileName = uuidv4() + ".mp4";

  //   const { data, error } = await supabase.storage
  //     .from("videos")
  //     .upload(fileName, videoFile, {
  //       contentType: videoFile.type,
  //       upsert: true,
  //       onUploadProgress: (progressEvent) => {
  //         const percentCompleted = Math.round(
  //           (progressEvent.loaded * 100) / progressEvent.total
  //         );
  //         setUploadProgress(percentCompleted);
  //       },
  //     });

  //   if (error) {
  //     console.log("Error uploading video:", error);
  //     setUploading(false);
  //     setUploadSuccess(false);
  //     return;
  //   }

  //   const CDNLink = `${CDNURL}/${data.path}`;
  //   setRawVideo(CDNLink);
  //   setUploading(false);
  //   setUploadProgress(100);
  //   setUploadSuccess(true);
  // };

  async function uploadVideo(file) {
    try {
      setUploading(true);
      setUploadProgress(0);

      const res = await fetch("https://clipflicks-admin-fe.vercel.app/api/upload-url");
      const { uploadUrl, publicUrl } = await res.json();

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const percentCompleted = Math.round((event.loaded * 100) / event.total);
            setUploadProgress(percentCompleted);
          }
        });

        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            console.log("✅ Upload successful!");
            console.log("📽️ Video URL:", publicUrl);
            resolve(publicUrl);
          } else {
            console.error("❌ Upload failed");
            reject(new Error("Upload failed"));
          }
        });

        xhr.addEventListener("error", () => {
          console.error("❌ Upload failed");
          reject(new Error("Upload failed"));
        });

        xhr.addEventListener("abort", () => {
          console.log("Upload aborted");
          reject(new Error("Upload aborted"));
        });

        xhr.open("PUT", uploadUrl);
        xhr.setRequestHeader("Content-Type", file.type);
        xhr.send(file);
      });
    } catch (error) {
      console.error("Error uploading video:", error);
      return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (loading) return;

    if (!agreed18 || !agreedTerms || !exclusiveRights) {
      alert("Please agree to all required checkboxes.");
      return;
    }

    if (signRef.current?.isEmpty()) {
      alert("Please draw your signature before submitting.");
      return;
    }

    setLoading(true);

    try {
      let signatureImage = "";

      if (signRef.current && !signRef.current.isEmpty()) {
        signatureImage = signRef.current.toDataURL("image/png");
      }

      const formData = {
        empRef: null,
        title,
        description,
        videoURL,
        firstName,
        lastName,
        socialHandle,
        country,
        email,
        recordedVideo,
        rawVideo,
        notUploadedElsewhere,
        agreed18,
        agreedTerms,
        exclusiveRights,
        signature: signatureImage,
        recordedBy,
        submittedElsewhere,
        otherCompanyName: submittedElsewhere === "Yes" ? otherCompanyName : "",
      };

      const response = await fetch(
        "https://clipflicks-admin-fe.vercel.app/api/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status !== 200) throw new Error("Failed to submit video");

      alert("Video submitted successfully!");

      // Clear form fields after submission
      setTitle("");
      setDescription("");
      setVideoURL("");
      setFirstName("");
      setLastName("");
      setSocialHandle("");
      setCountry("");
      setEmail("");
      setVideoFiles([]);
      setRawVideo("");
      setRecordedVideo(false);
      setNotUploadedElsewhere(false);
      setRecordedBy("");
      setSubmittedElsewhere("");
      setOtherCompanyName("");
      setAgreed18(false);
      setAgreedTerms(false);
      setExclusiveRights(false);

      // Clear signature pad
      if (signRef.current) signRef.current.clear();
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    if (signRef.current) {
      signRef.current.clear();
    }
  };

  return (
    <LayoutWrapper>
      {/* Enhanced premium background with gradient effect */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background Pattern and Gradients */}
        <div className="absolute inset-0 bg-black pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#712f8e]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-[#d601db]/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Enhanced Floating Gradient Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-32 md:top-28 left-0 right-0 text-center z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">Submit Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Creative Video</span>
          </motion.h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Premium Animated Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-black/60 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-800 w-full max-w-4xl mt-36 md:mt-40 shadow-xl shadow-[#712f8e]/5 z-10"
        >
          {/* Premium gradient accent */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-t-2xl"></div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Form header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white">Video Submission Form</h3>
              <p className="text-gray-400 mt-2">Fill out the details below to submit your video</p>
            </div>

            {/* Video Title and Description fields */}
            <div>
              <label className="text-white font-medium">Video Title *</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your video title"
                  className="w-full p-3 bg-black/60 text-white rounded-lg outline-none border border-gray-700 focus:border-[#712f8e] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-white font-medium">Video Description *</label>
              <div className="relative mt-2">
                <textarea
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your video description"
                  className="w-full p-3 bg-black/60 text-white rounded-lg outline-none border border-gray-700 focus:border-[#712f8e] transition-colors min-h-[100px] resize-y"
                />
              </div>
            </div>

            <div>
              <label className="text-white font-medium">Video URL *</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  required
                  value={videoURL}
                  onChange={(e) => setVideoURL(e.target.value)}
                  placeholder="Paste your video link"
                  className="w-full p-3 bg-black/60 text-white rounded-lg outline-none border border-gray-700 focus:border-[#712f8e] transition-colors"
                />
              </div>
            </div>

            {/* Enhanced file upload area */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[#712f8e]/60 rounded-xl p-8 cursor-pointer hover:border-[#712f8e] transition-all bg-black/40 group"
              onClick={() => document.getElementById("videoUpload").click()}
            >
              <div className="w-16 h-16 rounded-full bg-[#712f8e]/10 flex items-center justify-center mb-3 group-hover:bg-[#712f8e]/20 transition-colors">
                <Plus className="text-[#d601db] text-2xl" />
              </div>
              <p className="text-white font-medium text-lg">Click to upload video</p>
              <p className="text-gray-400 text-sm mt-1">MP4, MOV, AVI, MKV, WEBM, OGG</p>
              <input
                id="videoUpload"
                type="file"
                accept="video/mp4, video/mov, video/avi, video/mkv, video/webm, video/ogg"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setUploading(true);
                    setUploadProgress(0);
                    setVideoFiles([file]);
                    setUploadSuccess(null);

                    try {
                      const uploadedVideoUrl = await uploadVideo(file);
                      if (uploadedVideoUrl) {
                        setRawVideo(uploadedVideoUrl);
                        setUploadSuccess(true);
                      } else {
                        setUploadSuccess(false);
                      }
                    } catch (error) {
                      console.error("Upload error:", error);
                      setUploadSuccess(false);
                    } finally {
                      setUploading(false);
                    }
                  }
                }}
              />
            </motion.div>

            {/* Enhanced upload progress animation */}
            {uploading && (
              <div className="w-full mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm flex items-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="inline-block mr-2"
                    >
                      ⟳
                    </motion.span>
                    Uploading video...
                  </span>
                  <button
                    onClick={() => {
                      setUploading(false);
                      setVideoFiles([]);
                      window.currentUploadXHR?.abort();
                      window.currentUploadXHR = null;
                    }}
                    className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-xs font-medium hover:bg-red-500/30 transition-colors border border-red-500/20"
                  >
                    Cancel Upload
                  </button>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#712f8e] to-[#d601db]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${uploadProgress}%` }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
                <p className="text-gray-400 text-xs mt-1 text-right">{uploadProgress}%</p>
              </div>
            )}

            {/* Upload status indicators */}
            {uploadSuccess !== null && !uploading && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm font-medium flex items-center mt-2 p-3 rounded-lg ${uploadSuccess ? "text-green-500 bg-green-500/10 border border-green-500/20" : "text-red-500 bg-red-500/10 border border-red-500/20"
                  }`}
              >
                <span className={`mr-2 ${uploadSuccess ? "text-green-500" : "text-red-500"}`}>
                  {uploadSuccess ? "✓" : "✗"}
                </span>
                {uploadSuccess
                  ? "Video Uploaded Successfully"
                  : "Failed to upload the video"}
              </motion.div>
            )}

            {videoFiles.length > 0 && !uploading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/40 p-3 rounded-lg border border-gray-800 mt-3"
              >
                <p className="text-gray-400 text-sm mb-2">Uploaded file:</p>
                {videoFiles.map((file, index) => (
                  <div key={index} className="flex items-center text-white text-sm">
                    <span className="text-[#d601db] mr-2">•</span>
                    {file.name}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Name Fields - Enhanced with animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <label className="text-white font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter Your First Name"
                  className="w-full mt-2 p-3 bg-gray-900/60 text-white rounded-lg border border-gray-800 outline-none focus:border-[#712f8e] transition-colors"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <label className="text-white font-medium">Last Name *</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Your Last Name"
                  className="w-full mt-2 p-3 bg-gray-900/60 text-white rounded-lg border border-gray-800 outline-none focus:border-[#712f8e] transition-colors"
                />
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <label className="text-white font-medium">
                  Social Handle
                </label>
                <input
                  type="text"
                  value={socialHandle}
                  placeholder="Enter Your Social Handle"
                  onChange={(e) => setSocialHandle(e.target.value)}
                  className="w-full mt-2 p-3 bg-gray-900/60 text-white rounded-lg border border-gray-800 outline-none focus:border-[#712f8e] transition-colors"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <label className="text-white font-medium">Country *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  placeholder="Select Your Country"
                  className="w-full mt-2 p-3 bg-gray-900/60 text-white rounded-lg border border-gray-800 outline-none focus:border-[#712f8e] transition-colors appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23d601db' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "calc(100% - 12px) center", paddingRight: "35px" }}
                >
                  <option value="">Select a country</option>
                  {countries.map((c, index) => (
                    <option key={index} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>
            {/* Email with animation */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <label className="text-white font-medium">Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-2 p-3 bg-gray-900/60 text-white rounded-lg border border-gray-800 outline-none focus:border-[#712f8e] transition-colors"
              />
            </motion.div>

            {/* Enhanced checkbox section */}
            <div className="space-y-5 text-white">
              <div>
                <label className="block mb-3 font-semibold text-lg">
                  Who recorded this video? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Me", "Friend", "Family", "Other"].map((option) => (
                    <motion.label
                      key={option}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-[#712f8e]/10 transition-all cursor-pointer border ${recordedBy === option ? "border-[#d601db] bg-[#712f8e]/10" : "border-gray-800 bg-black/60"}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="recordedBy"
                        value={option}
                        checked={recordedBy === option}
                        onChange={() => setRecordedBy(option)}
                        className="w-5 h-5 text-[#712f8e] bg-black border border-gray-700 rounded accent-[#712f8e] focus:ring-[#712f8e]"
                      />
                      <span className="font-medium">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Q2: Was this submitted elsewhere? */}
              <div className="mt-6">
                <label className="block mb-3 font-semibold text-lg">
                  Did you submit this video to another company? *
                </label>
                <div className="space-y-3">
                  {["Yes", "No"].map((option) => (
                    <motion.label
                      key={option}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-[#712f8e]/10 transition-all cursor-pointer border ${submittedElsewhere === option ? "border-[#d601db] bg-[#712f8e]/10" : "border-gray-800 bg-black/60"}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="submittedElsewhere"
                        value={option}
                        checked={submittedElsewhere === option}
                        onChange={() => {
                          setSubmittedElsewhere(option);
                          if (option === "No") setOtherCompanyName("");
                        }}
                        className="w-5 h-5 text-[#712f8e] bg-black border border-gray-700 rounded accent-[#712f8e] focus:ring-[#712f8e]"
                      />
                      <span className="font-medium">{option}</span>
                    </motion.label>
                  ))}

                  {submittedElsewhere === "Yes" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <input
                        type="text"
                        value={otherCompanyName}
                        onChange={(e) => setOtherCompanyName(e.target.value)}
                        placeholder="Enter company name"
                        className="mt-3 block w-full p-3 bg-gray-900/60 text-white rounded-lg border border-gray-800 outline-none focus:border-[#712f8e] transition-colors"
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Enhanced agreement checkboxes */}
              <motion.label
                className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-[#712f8e]/10 transition-all cursor-pointer border ${agreed18 ? "border-[#d601db] bg-[#712f8e]/10" : "border-gray-800 bg-black/60"}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="checkbox"
                  checked={agreed18}
                  onChange={() => setAgreed18(!agreed18)}
                  className="w-5 h-5 text-[#712f8e] bg-black border border-gray-700 rounded accent-[#712f8e]"
                />
                <span>I verify that I am at least 18 years old *</span>
              </motion.label>

              <motion.label
                className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-[#712f8e]/10 transition-all cursor-pointer border ${agreedTerms ? "border-[#d601db] bg-[#712f8e]/10" : "border-gray-800 bg-black/60"}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={() => setAgreedTerms(!agreedTerms)}
                  className="w-5 h-5 text-[#712f8e] bg-black border border-gray-700 rounded accent-[#712f8e]"
                />
                <span>
                  I acknowledge and consent to the Terms of Submission and
                  Privacy Agreement *
                </span>
              </motion.label>

              <motion.label
                className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-[#712f8e]/10 transition-all cursor-pointer border ${exclusiveRights ? "border-[#d601db] bg-[#712f8e]/10" : "border-gray-800 bg-black/60"}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="checkbox"
                  checked={exclusiveRights}
                  onChange={() => setExclusiveRights(!exclusiveRights)}
                  className="w-5 h-5 text-[#712f8e] bg-black border border-gray-700 rounded accent-[#712f8e]"
                />
                <span>
                  I have not given exclusive rights to this video to anyone *
                </span>
              </motion.label>
            </div>

            {/* Signature Section with improved styling */}
            <div>
              <label className="text-white font-medium mb-2 block">Signature *</label>

              <div className="mt-2 bg-white rounded-lg p-3 border border-gray-300 flex justify-center">
                <SignatureCanvas
                  ref={signRef}
                  penColor="black"
                  canvasProps={{
                    className: "rounded-lg sigCanvas w-full max-w-[100%] h-[300px] touch-manipulation",
                    style: {
                      display: 'block',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      width: '100%',
                      height: '300px',
                    },
                  }}
                />
              </div>

              <button
                type="button"
                className="mt-3 px-4 py-2 bg-black text-white rounded-lg border border-gray-700 hover:bg-gray-900 transition-colors"
                onClick={handleClear}
              >
                Clear Signature
              </button>
            </div>


            {/* Enhanced submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: rawVideo ? 1.02 : 1, boxShadow: rawVideo ? "0 10px 25px -5px rgba(113, 47, 142, 0.4)" : "none" }}
              whileTap={{ scale: rawVideo ? 0.98 : 1 }}
              disabled={loading || !rawVideo}
              className={`w-full py-4 mt-8 text-white font-semibold rounded-lg transition-all shadow-lg ${
                rawVideo 
                  ? "bg-gradient-to-r from-[#712f8e] to-[#d601db] shadow-[#712f8e]/20" 
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </div>
              ) : !rawVideo ? (
                "Please Upload a Video First"
              ) : (
                "Submit Your Video"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
