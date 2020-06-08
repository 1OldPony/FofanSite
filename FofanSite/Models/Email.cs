using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
namespace FofanSite.Models
{
    public class EmailService
    {
        public async Task SendEmailAsync(string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Сайт о Фофанах", "fofanvaryag@yandex.ru"));
            emailMessage.To.Add(new MailboxAddress("","old.pony1@gmail.com"));
            emailMessage.Subject = "О фофане";
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Plain)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.yandex.ru", 25, false);
                await client.AuthenticateAsync("fofanvaryag@yandex.ru", "password");
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }
        }
    }
}