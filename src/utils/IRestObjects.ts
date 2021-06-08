export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IPhoto {
    id: number,
    albumId: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
    photo: IPhoto
}

export interface IUserAdditionalInformation {
    userId: number;
    expertise: IUserExpertise,
    panelInformation: IUserPanelInformation
}

export interface IUserPanelInformation {
    fee: string;
    terms: IUserPanelInformationTerms;
    correspondants: number[]
}

export interface IUserPanelInformationTerms {
    text: string;
    attachment: IAttachment;
}

export interface IAttachment {
    name: string;
    path: string;
}

export interface IUserExpertise {
    expertise: string[];
    specialties: string[];
    admissions: string[];
    counties: string[];
}

export interface IProposal {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: Date;
    firm: string;
}

export interface IReview {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: Date;
}

export interface IFee {
    year: Date;
    costCenter: string;
    amount: number;
    lawFirm: string;
}