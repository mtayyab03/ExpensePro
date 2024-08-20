import { ImageSourcePropType } from "react-native";

export type ReceiptType = {
    key: string;
    receipt: string;
    receiptId: string;
    supplier: string;
    amount: number;
    transactionDate: string;
    description: string;
    expenseCategory: string;
    multiCo: boolean;
    shipped: boolean;
    taxCharged: boolean;
    status: string;
    user: string;
    company: string;
};

export interface PostedTransaction {
    id: number;
    trendimage: ImageSourcePropType;
    title: string;
    amount: string;
    status: string;
}

export interface SubmittedReceipt {
    id: number;
    trendimage: ImageSourcePropType;
    title: string;
    amount: string;
    status: string;
}

export type Users = {
    name: string;
    role: string[];
    pCards: string[];
    formType: string;
};
