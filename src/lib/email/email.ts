import { Person, Group } from "@/types/types";
import "dotenv/config";

export function htmlBody(person: Person, group: Group) {
  const url = `${process.env.BASEURL || "http://localhost:3000"}/match/${group?.id}/${person.id}`;
  const email = `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
       <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Fala seu Zé Rola!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </head>
       <body style="margin: 0; padding: 0; ">
            <!-- HEADER -->
            <table bgcolor="#D7234D" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                 <tr>
                      <td align="center" height="200">
                           <img src="https://res.cloudinary.com/dtgkjo5sy/image/upload/v1702056103/logos/Desenho-Amigo-Secreto-PNG_sdml8j.png" alt="presente no formato de cubo, na cor vermelha com fita amarela, aberto com a tampa acima flutuando. Entre a tampa e caixa há o texto 'amigo secreto', em letra cursiva. confetes em tons de vermelho a vermelho escuro e amarelos voam nas laterais entre a tampa e a caixa de presente" style="display: block; max-height: 240px;" />
                      </td>
                 </tr>
                 <!-- MAIN BODY -->
                 <tr>
                      <td bgcolor=" #D7234D" style="padding: 2em;">
                           <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <hr>
                                <tr>
                                  <td align="center" style=" font-weight: 600; color: #ffffff; font-family: Arial, sans-serif; font-size: 1.5em; padding-top: 2em;">
                                      Te chamaram para o amigo secreto: ${group?.name}
                                  </td>
                                </tr>
                                <tr>
                                     <td align="center" style=" font-weight: 600; color: #ffffff; font-family: Arial, sans-serif; font-size: 1.5em; padding-top: 2em;">
                                         Veja quem você tirou: ${url}
                                     </td>
                                </tr>
                                <tr>
                                     <td>
                                          <img src="https://res.cloudinary.com/dtgkjo5sy/image/upload/v1663086085/logos/loveGhost_log09q.png" alt="" width="60%" style="display: block;" />
                                     </td>
                                </tr>
                                <!-- RODAPE -->
                                <tr>
                                     <td align="bottom" bgcolor="#D7234D" style="padding: 2em 2em 0;">
                                          <hr>
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                               <tr>
                                                    <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 1rem;">
                                                         &reg; Amigurs Secretis, Made With Love 2023<br />
                                                         <a href="#" style="color: #ffffff;">
                                                              <font color="#ffffff">
                                                                   Unsubscibre</font>
                                                         </a>to this e-mail
                                                    </td>
                                               </tr>
                                          </table>
                                     </td>
                                </tr>
                           </table>
       </body>
  </html>`;

  return email;
}
