import { icCircles, icLine, icPaypal, icSalary } from "../../assets/icons";

const Billing: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="flex gap-3">
                <div className="w-[65%] flex flex-col justify-between gap-3">
                    <div className="flex justify-between">
                        <div className="w-[45%] text-white p-5" style={{background: "linear-gradient(82deg, #313860 2.25%, #151928 79.87%)", borderRadius: "15px"}}>
                            <div className="flex justify-between mb-7">
                                <span className="text-1.125remfont-bold">Purity UI</span>
                                <figure className="w-[2rem] h-[2rem]">
                                    <img className="w-full h-full" src={icCircles} alt="cirlce" />
                                </figure>
                            </div>
                            <div>
                                <p className="text-1.5rem font-bold">7812 2139 0823 XXXX</p>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="uppercase text-0.625rem">valid thru</p>
                                        <p className="text-0.875rem font-bold">05/24</p>
                                    </div>
                                    <div>
                                        <p className="uppercase text-0.625rem">cvv</p>
                                        <p className="text-0.875rem font-bold">09X</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%] bg-white p-6 flex flex-col items-center" style={{borderRadius: "15px"}}>
                            <figure className="w-[3rem] h-[3rem] flex items-center justify-center" style={{backgroundColor: "#4FD1C5", borderRadius: "12px"}}>
                                <img src={icSalary} alt="wallet" />
                            </figure>

                            <span className="text-1.125rem font-bold mt-3">Salary</span>
                            <span className="text-0.75rem text-primaryTextColor">Belong Interactive</span>
                            <figure>
                                <img src={icLine} alt="" />
                            </figure>
                            <span className="text-1.125rem font-bold">+$2000</span>
                        </div>
                        <div className="w-[25%] bg-white p-6 flex flex-col items-center" style={{borderRadius: "15px"}}>
                            <figure className="w-[3rem] h-[3rem] flex justify-center items-center" style={{backgroundColor: "#4FD1C5", borderRadius: "12px"}}>
                                <img src={icPaypal} alt="wallet" />
                            </figure>

                            <span className="text-1.125rem font-bold mt-3">Paypal</span>
                            <span className="text-0.75rem text-primaryTextColor">Freelance Payment</span>
                            <figure>
                                <img src={icLine} alt="" />
                            </figure>
                            <span className="text-1.125rem font-bold">$455.00</span>
                        </div>
                    </div>
                    <div className="bg-white p-5" style={{borderRadius: "12px"}}>
                        <div className="flex justify-between">
                            <span className="text-0.75rem font-bold">Payment Method</span>
                            <button className="text-white p-2 uppercase text-0.625rem font-bold" style={{borderRadius: "12px",background: "linear-gradient(82deg, #313860 2.25%, #151928 79.87%)"}}>add new card</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    top right
                </div>
            </div>
            <div className="flex">
                <div className="w-[60%]">
                    bottom left
                </div>
                <div className="w-[35%]">
                    bottom right
                </div>
            </div>
        </div>
    )
};

export default Billing;