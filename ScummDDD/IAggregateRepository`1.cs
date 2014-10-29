using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IAggregateRepository<T, TKey>
    {
        T GetById(TKey id);
        TKey Insert(T aggregate);
        void Update(TKey key, T aggregate);
        void Delete(TKey key);
    }
}
