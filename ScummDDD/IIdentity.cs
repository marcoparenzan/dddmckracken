using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IIdentity<T>
        where T : IIdentity<T>
    {
        Guid Id { get; }
        string Description { get; }
    }
}
