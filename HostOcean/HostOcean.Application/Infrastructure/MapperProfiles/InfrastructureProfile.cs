﻿using AutoMapper;
using HostOcean.Domain.Entities;
using HostOcean.Infrastructure.BsuirGroupService;

namespace HostOcean.Application.Infrastructure.MapperProfiles
{
    public class InfrastructureProfile : Profile
    {
        public InfrastructureProfile()
        {
            CreateMap<IISGroup, Group>();
        }
    }
}