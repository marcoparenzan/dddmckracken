using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public abstract class ActorAggregate<TActor, TItem> : IActor<TActor, TItem>
        where TActor : IActor<TActor, TItem>
        where TItem : IItem<TItem>
    {
        public ActorAggregate() { }

        protected ActorAggregate(int x, int y, string description = "")
        {
            this._id = Guid.NewGuid();
            this._description = string.IsNullOrWhiteSpace(description) ? this.GetType().Name : description;
            this._x = x;
            this._y = y;
            _items = new List<TItem>();
        }

        //public static T1 CreateNew<T1, T2>(int x, int y, string description)
        //    where T1 : IActor
        //{
        //    var instance = (T)Activator.CreateInstance(typeof(T), x, y, description);

        //    return instance;
        //}

        private int _x;
        private int _y;
        private Guid _id;
        private string _description;
        private List<TItem> _items;

        void IActor<TActor, TItem>.Goto(IActorContainer<TActor, TItem> stage)
        {
            _container = stage;
        }

        private IActorContainer<TActor, TItem> _container;

        IActorContainer<TActor, TItem> IActor<TActor, TItem>.Container
        {
            get { return _container; }
        }

        public Guid Id
        {
            get { return _id; }
        }

        public string Description
        {
            get { return _description; }
        }

        protected int X
        {
            get { return _x; }
            set { _x = value; }
        }

        protected int Y
        {
            get { return _y; }
            set { _y = value; }
        }

        TItem IItemContainer<TItem>.FindById(Guid id)
        {
            var item = _items.SingleOrDefault(xx => xx.Id == id);
            return (TItem)item; throw new NotImplementedException();
        }

        TItem[] IItemContainer<TItem>.Items
        {
            get { return _items.Select(xx => (TItem)xx).ToArray(); }
        }

        void IItemContainer<TItem>.Enter(TItem item)
        {
            if (_items.Contains(item))
            {
                throw new ArgumentException("Identity already entered");
            }
            _items.Add(item);
        }

        void IItemContainer<TItem>.Exit(TItem item)
        {
            if (!_items.Contains(item))
            {
                throw new ArgumentException("Identity not entered");
            }
            _items.Remove(item);
        }

        void IItemContainer<TItem>.Notify(IMessage message)
        {
            throw new NotImplementedException();
        }

        public ActorScript GetScript()
        {
            return new ActorScript
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
