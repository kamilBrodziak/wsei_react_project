import { IPhoto, IUser, IUserAdditionalInformation } from "./IRestObjects";

const API = "https://jsonplaceholder.typicode.com";

class RestService {
    public static getPhoto(id: number) : Promise<IPhoto> {
        return fetch(`${API}/photos/${id}`).then(response => response.json());
    }

    public static getUser(id: number) : Promise<IUser> {
        return fetch(`${API}/users/${id}`).then(response => response.json());
    }

    public static getUserInformation(userId:number):IUserAdditionalInformation {
        return {
            userId: userId,
            expertise: {
                expertise: ["Mergers and acquisition"],
                specialties: ["Cross border operation", "Transaction over 500M€/$"],
                admissions: ["Paris bar association", "Tunisian bar association"],
                counties: ["Tunisia"]
            },
            panelInformation: {
                fee: "610€/hour (Negociated)",
                terms: {
                    text: "Monthly 10k€ retainer - see with Jeanny Smith",
                    attachment: {
                        path: "",
                        name: "Attachment_lorem_ipsum25425.jpg"
                    }
                },
                correspondants: [1,2,3]
            },
            proposals: [],
            reviews: [],
            fees: [
                {
                    year: new Date("2019"),
                    costCenter: "CS 153",
                    amount: 3500,
                    lawFirm: "Clifford chance"
                }, {
                    year: new Date("2018"),
                    costCenter: "CS 153",
                    amount: 9500,
                    lawFirm: "Linklaters"
                }, {
                    year: new Date("2017"),
                    costCenter: "CS 47",
                    amount: 10500,
                    lawFirm: "Linklaters"
                }, {
                    year: new Date("2017"),
                    costCenter: "CS 153",
                    amount: 18500,
                    lawFirm: "Linklaters"
                }, {
                    year: new Date("2017"),
                    costCenter: "CS 32",
                    amount: 15500,
                    lawFirm: "Linklaters"
                }
            ]
        }
    }

    // public static getPost(id: number) : Promise {

    // }
}

export default RestService;