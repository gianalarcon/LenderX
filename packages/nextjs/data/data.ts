export interface Data {
  id: string;
  pool: string;
  agreement: string[];
  date: string;
  amount: string;
  penalty: string;
  interest: string;
  status: string;
}

export interface Role {
  name: string;
  actions: string;
  image: string;
}

export const LenderRoles: Role[] = [
  {
    name: "Manager",
    actions: "Approve",
    image: "/user_manager.png",
  },
  {
    name: "Lenders",
    actions: "Objections?",
    image: "/user_lender.png",
  },
  {
    name: "Borrowers",
    actions: "Execute /Repay",
    image: "/user_borrower.png",
  },
];

export const data: Data[] = [
  {
    id: "1",
    pool: "Cheap Local Lending",
    agreement: ["Base", "NFT", "FT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Pending",
  },
  {
    id: "2",
    pool: "Cheap Local Lending",
    agreement: ["NFT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Active",
  },
  {
    id: "3",
    pool: "Cheap Local Lending",
    agreement: ["Base", "FT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Rejected",
  },
];
