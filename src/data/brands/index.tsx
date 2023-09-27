import google from "../../assets/images/gog.png";
import paypal from "../../assets/images/pay.png";
import skrill from "../../assets/images/srill.png";
import slack from "../../assets/images/slack.png";
import github from "../../assets/images/gith.png"


export interface BrandI {
  name: string;
  logo: any;
}

export const brands1: BrandI[] = [
    {name: "Google",logo: google,},
    {name: "Github",logo: github},
    {name: "Slack",logo: slack},
    {name: "Skrill",logo: skrill},
    {name: "Paypal",logo: paypal},
];

export const brands2: BrandI[] = [
    {name: "Github",logo: github,},
    {name: "Slack",logo: slack,},
    {name: "Skrill",logo: skrill,},
    {name: "Paypal",logo: paypal,},
    {name: "Google",logo: google,},
];

export const brands3: BrandI[] = [
    {name: "Slack",logo: slack,},
    {name: "Skrill",logo: skrill,},
    {name: "Paypal",logo: paypal,},
    {name: "Google",logo: google,},
    {name: "Github",logo: github,},
];

export const brands4: BrandI[] = [
    {name: "Skrill",logo: skrill,},
    {name: "Paypal",logo: paypal,},
    {name: "Google",logo: google,},
    {name: "Github",logo: github,},
    {name: "Slack",logo: slack,},
];