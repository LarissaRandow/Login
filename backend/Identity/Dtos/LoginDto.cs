using System.ComponentModel.DataAnnotations;

namespace Identity.Dtos
{
    public class LoginDto
    {
        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public LoginDto(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}
