import * as nodemailer from "nodemailer";

type EmailPayload = {
  frontSideImage: string;
  backSideImage: string;
  isDoubleSided: boolean;
  ballType: string;
  orderId: string;
  unit: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  email: string;
  totalPrice: number;
  grandTotal: number;
  firstName: string;
  lastName: string;
  shippingDetails: string
  quantity: number;
};

export async function sendMail({
  frontSideImage,
  backSideImage,
  isDoubleSided,
  ballType,
  orderId,
  unit,
  streetAddress,
  city,
  province,
  zipCode,
  country,
  phoneNumber,
  email,
  totalPrice,
  grandTotal,
  firstName,
  lastName,
  shippingDetails,
  quantity
}: EmailPayload) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const backSideImageLink = isDoubleSided ? `<p><a href="${backSideImage}">Back Side Image</a></p>` : '';

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "hello@customgolfballprinting.com",   
    subject: "New Order Notification",
    html: `
    <body>
      <p>This is to inform you that a payment has been successfully received from a customer. Here are the pertinent details:</p>
      <ul>
        <li><strong>Order ID:</strong> ${orderId}</li>
        <li><strong>Customer Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Contact Number:</strong> ${phoneNumber}</li>
        <li><strong>Payment Amount:</strong> $${grandTotal.toFixed(2)}</li>
        <li><strong>Ball Type:</strong> ${ballType}</li>
        <li><strong>Quantity:</strong> ${quantity}</li>
        <li><strong>Pick-up or Shipping:</strong> ${shippingDetails}</li>
        <li><strong>Shipping Address:</strong> ${unit}, ${streetAddress}, ${city}, ${province}, ${country}, ${zipCode}</li>
      </ul>
      <p>Please find the image links associated with the order:</p>
      <p><a href="${frontSideImage}">Front Side Image</a></p>
      ${backSideImageLink}
      <p>Should you need further details or assistance concerning this transaction, feel free to contact us. Your attention to this notification is greatly appreciated.</p>
    </body>
    `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}