using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IActorRepository<TActor> : IAggregateRepository<TActor, Guid>
    {
    }
}
