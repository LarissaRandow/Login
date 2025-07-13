using Identity.Models;

namespace Identity.Services
{
    public interface IAuthService
    {
        Task<string> GenerateToken(ApplicationUser user);
    }
}
