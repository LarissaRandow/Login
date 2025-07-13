using System.ComponentModel.DataAnnotations;

namespace Identity.Dtos
{
    public class RegisterDto
    {
        [Required, EmailAddress]
        public string Email { get; set; }

        [Required, MinLength(6)]
        public string Password { get; set; }

        public RegisterDto(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}
