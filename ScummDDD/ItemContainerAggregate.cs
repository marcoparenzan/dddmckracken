using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public abstract class ItemContainerAggregate<TItem> : ItemAggregate<TItem>, IItemContainer<TItem>
        where TItem : IItem<TItem>
    {
        public ItemContainerAggregate() { }

        protected ItemContainerAggregate(int x, int y, string description = ""): base(x, y, description)
        { 
            _items = new List<TItem>();
        }
        
        private List<TItem> _items;

        TItem IItemContainer<TItem>.FindById(Guid id)
        {
            var item = _items.SingleOrDefault(xx => xx.Id == id);
            return (TItem)item;
        }

        TItem[] IItemContainer<TItem>.Items
        {
            get { return _items.Select(xx => (TItem)xx).ToArray(); }
        }

        void IItemContainer<TItem>.Enter(TItem identity)
        {
            if (_items.Contains(identity))
            {
                throw new ArgumentException("Identity already entered");
            }
            _items.Add(identity);
        }

        void IItemContainer<TItem>.Exit(TItem identity)
        {
            if (!_items.Contains(identity))
            {
                throw new ArgumentException("Identity not entered");
            }
            _items.Remove(identity);
        }

        void IItemContainer<TItem>.Notify(IMessage message)
        {
            throw new NotImplementedException();
        }

        protected T1 Add<T1>(int x, int y, string description = "")
            where T1 : TItem
        {
            var item = (T1)Activator.CreateInstance(typeof(T1), x, y, description);
            _items.Add(item);
            return item;
        }

        public ItemScript GetScript()
        {
            return new ItemScript
            {
                Id = Id
                ,
                Description = Description
                ,
                X = X
                ,
                Y = Y
            };
        }
    }
}
