using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class ApplictionServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options =>
        {
            options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
        });
            services.AddSwaggerGen(setupAction: c =>
            {
                c.SwaggerDoc(name: "v1", info: new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            return services;
        }

    }
}