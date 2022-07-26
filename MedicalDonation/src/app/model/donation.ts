export interface Donation {
    id: number|null;
    dod: Date;
    ifDonation: boolean;
    collected: boolean;
    med_id: number|null;
    user_id: number|null;
    ngo_id: number|null;
    exec_id: number|null;
}