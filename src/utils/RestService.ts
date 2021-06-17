import { IComment, IRestComment } from "./IRestComments";
import { IPhoto } from "./IRestFiles";
import { IRestPost } from "./IRestPost";
import { IQuery, IQueryOptions } from "./IRestQuery";
import { IFee, IProposal, IReview, IUser, IUserAdditionalInformation } from "./IRestUser";

const API = "https://jsonplaceholder.typicode.com";

interface IJsonPostRest {
    id: number;
    userId: number;
    title: string;
    body: string;
}


export const getQueryString = (options:IQueryOptions) => {
    let query:string[] = [];
    if(options._like){
        query = [...query, ...Object.entries(options._like).map(val => `${val[0]}_like=${val[1]}`)]
    }
    if(options._page) {
        query.push(`_page=${options._page}`);
    }
    if(options._limit) {
        query.push(`_limit=${options._limit}`);
    }
    return query.join("&");
}

class RestService {
    public static getPhoto(id: number) : Promise<IPhoto> {
        return fetch(`${API}/photos/${id}`).then(response => response.json());
    }

    public static getUser(id: number) : Promise<IUser> {
        return fetch(`${API}/users/${id}`).then(response => response.json());
    }

    public static getCommentQuery(queryStr: string):Promise<IQuery<IComment[]>> {
        return fetch(`${API}/comments?${queryStr}`)
            .then((response) => response.json().then((items:IRestComment[]) => ({
                items: items,
                total:parseInt(response.headers.get("X-TOTAL-COUNT"))
            }))).then((json:IQuery<IRestComment[]>) => ({
                ...json,
                items: json.items.map(val => ({
                        ...val,
                        userId: 1
                    }))
                }
            ));
    }

    public static getPostQuery(queryStr: string):Promise<IRestPost[]> {
        return fetch(`${API}/posts?${queryStr}`).then(response => response.json()).then((json:IJsonPostRest[]) => {
            return json.map(val => {
                return {
                    ...val,
                    date: new Date(),
                    photoId: val.id
                }
            });
        }); 
    }

    public static getPost(id: number) : Promise<IRestPost> {
        return fetch(`${API}/posts/${id}`).then(response => response.json()).then((json:IJsonPostRest) => {
            return {
                ...json,
                date: new Date(),
                photoId: json.id
            }
        });
    }

    public static getUserProposals(userId: number, page=0, limit=3):IProposal[] {
        const proposals:IProposal[] = [
            {
                name: "Operation Times",
                entity: "Renault Corporation",
                location: "France",
                expertise: "#Tax",
                date: new Date(2018, 0, 20),
                firm: "Racine"
            },
            {
                name: "Op. Prometheus",
                entity: "Renault HQ",
                location: "USA",
                expertise: "#M&A",
                date: new Date(2019, 1, 19),
                firm: "Clifford chance"
            },
            {
                name: "Op. Latandre",
                entity: "Renault Branch",
                location: "Italia",
                expertise: "#Social",
                date: new Date(2019, 1, 18),
                firm: "SVZ"
            },
        ]
        const newProposals = [];
        for(let i = 0; i < limit; ++i) {
            newProposals.push(proposals[(page*limit + i)%proposals.length])
        }
        
        return newProposals;
    }


    public static getUserReviews(userId: number, page=0, limit=3):IReview[] {
        const reviews:IReview[] = [
            {
                name: "Operation Times",
                entity: "Renault Corporation",
                location: "France",
                expertise: "#Tax",
                date: new Date(2018, 0, 20),
            },
            {
                name: "Op. Prometheus",
                entity: "Renault HQ",
                location: "USA",
                expertise: "#M&A",
                date: new Date(2019, 1, 19),
            },
            {
                name: "Op. Latandre",
                entity: "Renault Branch",
                location: "Italia",
                expertise: "#Social",
                date: new Date(2019, 1, 18),
            },
        ]
        const newReviews = [];
        for(let i = 0; i < limit; ++i) {
            newReviews.push(reviews[(page*limit + i)%reviews.length])
        }
        return newReviews;
    }

    public static getUserFees(userId:number, page=0, limit=6):IFee[] {
        return [
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
            }
        }
    }

    // public static getPost(id: number) : Promise {

    // }
}

export default RestService;