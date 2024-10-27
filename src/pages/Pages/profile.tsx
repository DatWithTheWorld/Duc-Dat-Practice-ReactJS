import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { avt, profileBanner } from "../../assets/images";
import { User } from "../../interfaces/user"; 
import { icEdit, icFb, icInstagram, icTwitter } from "../../assets/icons";
import { profileBar } from "../../utils/constants/constants";
import { getUserById } from "../../services/User/user";
import RememberMeCheckbox from "../../components/RememberMeCheckBox";
import { getAllProject } from "../../services/Projects/projects";
import { projects } from "../../interfaces/projects";

const Profile: React.FC = () => {
    const [uid, setUid] = useState<string | null>(null);
    const [follow, setFollow] = useState<boolean>(false);
    const [answers, setAnswers] = useState<boolean>(false);
    const [mentions, setMentions] = useState<boolean>(false);
    const [launch, setLaunch] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    const [subscribe, setSubscribe] = useState<boolean>(false);
    const [projects, setProjects] = useState<projects[]>([]);


    useEffect(() => {
        const storedUid = localStorage.getItem("id");
        if (storedUid) {
            setUid(storedUid);
        }
    }, []);

    const { mutate: fetchUser, data, error, isPending } = useMutation<User, Error, string>(
        {
            mutationFn: (id) => getUserById(id), 
            onSuccess: (user: User) => {
                console.log("User fetched successfully:", user);
                if (follow) localStorage.setItem("follow", "true");
                if (answers) localStorage.setItem("answers", "true");
                if (mentions) localStorage.setItem("mentions", "true");
                if (launch) localStorage.setItem("launch", "true");
                if (update) localStorage.setItem("update", "true");
                if (subscribe) localStorage.setItem("subscribe", "true");
            },
            onError: (error: Error) => {
                console.error("Error fetching user:", error);
            },
        }
    );

     const { mutate: fetchProjects } = useMutation<projects[], Error>(
        {
            mutationFn: getAllProject,
            onSuccess: (projects) => {
                setProjects(projects); 
            },
            onError: (error: Error) => {
                console.error("Error fetching projects:", error);
            },
        }
    );

    useEffect(() => {
        if (uid) {
           fetchUser(uid);
            fetchProjects();
        }
    }, [uid]);

    return (
        <div className="w-full z-10 flex-col flex items-center  h-screen" style={{ position: "absolute" }}>
            <figure style={{ zIndex: "10" }}>
                <img className="z-10 "  src={profileBanner} alt="banner" />
            </figure>
            <div className="flex justify-between items-center" style={{
               borderRadius: "15px",
               border: "1px solid #FFF",
               background: "linear-gradient(113deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 110.84%)" ,
               boxShadow: "0px 2px 5.5px 0px rgba(0, 0, 0, 0.02)",
               backdropFilter: "blur(10.499999046325684px)",
               padding: "0.5rem",
               transform: "translateY(-60%)",
               width: "95%",
               zIndex:'20'
               
            }}>
            <div>
                {isPending && <p>Loading user information...</p>}
                {error instanceof Error && <p>Error: {error.message}</p>}
                {data && (
                    <div className="flex gap-3">
                        <div className="relative">
                            {data.otherFields?.avatar ? (
                            <figure className="w-[3rem]" style={{borderRadius: "20px"}}>
                                <img className="w-full h-full" style={{borderRadius: "10px"}} src="" alt="" />
                            </figure>
                            ): (
                                <figure className="w-[3rem]" style={{borderRadius: "20px"}}>
                                    <img className="w-full h-full" style={{borderRadius: "10px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                                </figure>
                            )}
                            <figure className="absolute bottom-0 right-0 bg-white p-[3px]" style={{borderRadius:"4px", transform: "translateY(0.4rem)"}}>
                                <img src={icEdit} alt="edit" />
                            </figure>
                        </div>
                        <div>
                            <p className="text-1.125rem font-bold"> {data.name}</p>
                            <p className="text-0.875rem text-textBlur">{data.email}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex gap-[3rem] mr-10">
                {profileBar.map((item) => (
                    <figure key={item.id} className="flex gap-1 flex-grow items-center hover:bg-white p-[0.5rem] hover:rounded-lg hover:shadow-sm transition-shadow duration-300 hover:shadow-md hover:cursor-pointer ">
                        <img src={item.image} alt={item.title} />
                        <figcaption className="uppercase text-0.625rem font-bold">{item.title}</figcaption>
                    </figure>
                ))}
            </div>
            </div>
            <div className="overflow-y-scroll h-[50%] w-full profile-area">
            <div className="user-option flex w-full max-h-[20rem]  mb-[2rem] justify-between">
                <div className="bg-white w-[32%]  p-[1.2rem] flex flex-col justify-between" style={{borderRadius: "15px", boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"}} >
                    <h3 className="font-bold text-1.125rem">Platform Settings</h3>
                    <div className="h-[40%]">
                        <h4 className="uppercase text-0.625rem text-primaryTextColor font-bold">account</h4>
                        <div className="h-[80%] flex flex-col justify-between">
                            <RememberMeCheckbox
                            checked={follow}
                            onChange={(e) => setFollow(e.target.checked)}
                            label="Email me when someone follows me" />
                            <RememberMeCheckbox
                            checked={answers}
                            onChange={(e) => setAnswers(e.target.checked)}
                            label="Email me when someone answers on my post" />
                            <RememberMeCheckbox
                            checked={mentions}
                            onChange={(e) => setMentions(e.target.checked)}
                            label="Email me when someone mentions me" />
                        </div>
                    </div>
                    <div className="h-[40%]">
                        <h4 className="uppercase text-0.625rem text-primaryTextColor font-bold">application</h4>
                        <div className="h-[80%] flex flex-col justify-between">
                            <RememberMeCheckbox
                            checked={launch}
                            onChange={(e) => setLaunch(e.target.checked)}
                            label="New launches and projects" />
                            <RememberMeCheckbox
                            checked={update}
                            onChange={(e) => setUpdate(e.target.checked)}
                            label="Monthly product updaté" />
                            <RememberMeCheckbox
                            checked={subscribe}
                            onChange={(e) => setSubscribe(e.target.checked)}
                            label="Subcribe to newsletter" />
                        </div>
                    </div>
                </div>
                <div className="profileInfor w-[32%] bg-white p-[1.2rem] flex flex-col justify-between" style={{borderRadius:"15px"}}>
                    <div>
                    <h3  className="font-bold text-1.125rem">Profile Information </h3>
                    <p className="text-primaryTextColor text-0.75rem">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                    <hr className="mt-[1rem] mb-[1rem] w-[70%] m-auto"  />
                    </div>
                    <div className="h-[50%] flex flex-col justify-between">
                        <p className="text-textBlur text-0.75rem font-bold">Full Name: <span className="text-primaryTextColor font-normal">Alec M.Thompson</span></p>
                        <p className="text-textBlur text-0.75rem font-bold">Mobile: <span className="text-primaryTextColor font-normal">(44) 123 1234 123</span></p>
                        <p className="text-textBlur text-0.75rem font-bold">Email: <span className="text-primaryTextColor font-normal">alec.thompson@example.com</span></p>
                        <p className="text-textBlur text-0.75rem font-bold">Location: <span className="text-primaryTextColor font-normal">United States</span></p>
                        <p className="flex items-center text-textBlur text-0.75rem font-bold">Social Media: 
                            <div className="flex items-center gap-[1rem] ml-2">
                                <figure>
                                    <img src={icFb} alt="facebook" />
                                </figure>
                                <figure>
                                    <img src={icTwitter} alt="twitter" />
                                </figure>
                                <figure>
                                    <img src={icInstagram} alt="instagram" />
                                </figure>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="bg-white w-[32%] p-[1.2rem] flex flex-col justify-between" style={{borderRadius: "15px", boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"}} >
                    <h3 className="font-bold text-1.125rem">Conversations</h3>
                   <div className="mt-[1rem] overflow-y-scroll flex flex-col gap-3 h-[80%] profile-area">
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <figure className="w-[3rem]" style={{borderRadius: "15px"}}>
                                <img style={{borderRadius: "15px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                            </figure>
                            <div className="flex flex-col">
                                <span className="text-0.875rem font-bold">Esthera Jackson</span>
                                <span className="text-0.875rem text-primaryTextColor">Hi! I need more informations ...</span>
                            </div>
                        </div>
                        <span className="uppercase text-0.625rem text-welcomeText font-bold">
                            reply
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <figure className="w-[3rem]" style={{borderRadius: "15px"}}>
                                <img style={{borderRadius: "15px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                            </figure>
                            <div className="flex flex-col">
                                <span className="text-0.875rem font-bold">Esthera Jackson</span>
                                <span className="text-0.875rem text-primaryTextColor">Hi! I need more informations ...</span>
                            </div>
                        </div>
                        <span className="uppercase text-0.625rem text-welcomeText font-bold">
                            reply
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <figure className="w-[3rem]" style={{borderRadius: "15px"}}>
                                <img style={{borderRadius: "15px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                            </figure>
                            <div className="flex flex-col">
                                <span className="text-0.875rem font-bold">Esthera Jackson</span>
                                <span className="text-0.875rem text-primaryTextColor">Hi! I need more informations ...</span>
                            </div>
                        </div>
                        <span className="uppercase text-0.625rem text-welcomeText font-bold">
                            reply
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <figure className="w-[3rem]" style={{borderRadius: "15px"}}>
                                <img style={{borderRadius: "15px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                            </figure>
                            <div className="flex flex-col">
                                <span className="text-0.875rem font-bold">Esthera Jackson</span>
                                <span className="text-0.875rem text-primaryTextColor">Hi! I need more informations ...</span>
                            </div>
                        </div>
                        <span className="uppercase text-0.625rem text-welcomeText font-bold">
                            reply
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <figure className="w-[3rem]" style={{borderRadius: "15px"}}>
                                <img style={{borderRadius: "15px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                            </figure>
                            <div className="flex flex-col">
                                <span className="text-0.875rem font-bold">Esthera Jackson</span>
                                <span className="text-0.875rem text-primaryTextColor">Hi! I need more informations ...</span>
                            </div>
                        </div>
                        <span className="uppercase text-0.625rem text-welcomeText font-bold">
                            reply
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <figure className="w-[3rem]" style={{borderRadius: "15px"}}>
                                <img style={{borderRadius: "15px"}} src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="avt" />
                            </figure>
                            <div className="flex flex-col">
                                <span className="text-0.875rem font-bold">Esthera Jackson</span>
                                <span className="text-0.875rem text-primaryTextColor">Hi! I need more informations ...</span>
                            </div>
                        </div>
                        <span className="uppercase text-0.625rem text-welcomeText font-bold">
                            reply
                        </span>
                    </div>
                   </div>
                    
                </div>
            </div>
            <div className="w-full p-[1rem] overflow-x-hidden" style={{boxShadow: '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)', backgroundColor:"white", borderRadius: "15px"}}>
              <h3 className="text-1.125rem font-bold">Projects</h3>   
              <p className="text-primaryTextColor text-0.875rem">Architects design houses</p>
              <div className="project-area flex overflow-x-scoll w-full mt-4 gap-8 "> 
              {projects.map((project) => (
                                <div key={project.id} className="max-h-[22rem] min-w-[18rem] h-[18rem] w-[18rem] flex flex-col justify-between" >
                                   <figure className="h-[55%] w-full">
                                    <img className="w-full h-full"  style={{borderRadius: "15px"}} src={project.image} alt="" />
                                   </figure>
                                   <div>
                                    <span className="text-0.625rem text-primaryTextColor">{project.name}</span>
                                    <h3 className="font-bold text-1.125rem">{project.shortDescription}</h3>
                                    <p className="text-0.75rem text-primaryTextColor">{project.longDescription}</p>
                                   </div>
                                   <div className="flex justify-between">
                                    <button className="uppercase text-0.625rem text-welcomeText font-bold" style={{border: "1px solid #4FD1C5", borderRadius: "15px", padding:"0.5rem 1rem 0.5rem 1rem"}}>view all</button>
                                    <figure>
                                        <img src={avt} alt="avt" />
                                    </figure>
                                   </div>
                                </div>
                            ))
                        
                }
                        <div className="max-h-[22rem] min-w-[18rem] h-[18rem] w-[18rem] flex flex-col items-center justify-center" style={{border: "1px solid #E0E1E2", borderRadius: "15px"}}>
                        <span className="text-textBlur text-3xl">+</span>
                        <span className="text-textBlur text-1.125rem">Create a New Project</span>
                        </div>
                    
              </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;