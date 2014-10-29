using DDDMcKracken.Domain.Events;
using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Actors
{
    public class DDDActor : ActorAggregate<IDDDActor, IDDDItem>, IDDDActor
    {
        public DDDActor() { }
        public DDDActor(int x, int y, string description = "")
            : base(x, y, description)
        {
        }

        // actions

        IDDDActor IDDDActor.Push(IDDDItem item)
        {
            item.PushedBy(this);
            return this;
        }

        IDDDActor IDDDActor.Pull(IDDDItem item)
        {
            item.PulledBy(this);
            return this;
        }

        IDDDActor IDDDActor.Give(IDDDItem item, IOtherActor target)
        {
            item.GivenBy(this, target);
            return this;
        }

        IDDDActor IDDDActor.Open(IDDDItem item)
        {
            item.OpenedBy(this);
            return this;
        }

        IDDDActor IDDDActor.Close(IDDDItem item)
        {
            item.ClosedBy(this);
            return this;
        }

        IDDDActor IDDDActor.Read(IDDDItem item)
        {
            item.ReadBy(this);
            return this;
        }

        IDDDActor IDDDActor.WalkTo(IDDDItem item)
        {
            item.WalkedToBy(this);
            return this;
        }

        IDDDActor IDDDActor.PickUp(IDDDItem item)
        {
            item.PickedUpBy(this);
            return this;
        }

        IDDDActor IDDDActor.WhatIs(IDDDItem item)
        {
            item.WhatIs(this);
            return this;
        }

        IDDDActor IDDDActor.PutOn(IDDDItem item)
        {
            item.PutOnBy(this);
            return this;
        }

        IDDDActor IDDDActor.TakeOff(IDDDItem item)
        {
            item.TakenOffBy(this);
            return this;
        }

        IDDDActor IDDDActor.Use(IDDDItem item)
        {
            item.UsedBy(this);
            return this;
        }

        IDDDActor IDDDActor.TurnOn(IDDDItem item)
        {
            item.TurnedOnBy(this);
            return this;
        }

        IDDDActor IDDDActor.TurnOff(IDDDItem item)
        {
            item.TurnedOnBy(this);
            return this;
        }

        // events

        public void Move(int x, int y)
        {
            this.X = x;
            this.Y = y;
            if (Moved != null) {
                Moved(this, new DDDActorMoved.Args { 
                    X = x
                    ,
                    Y = y
                });
            }
        }

        public event DDDActorMoved.Handler Moved;

        // ItemContainer

        public IDDDItem FindById(Guid id)
        {
            throw new NotImplementedException();
        }

        public IDDDItem[] Items
        {
            get { throw new NotImplementedException(); }
        }

        public void Enter(IDDDItem item)
        {
            throw new NotImplementedException();
        }

        public void Exit(IDDDItem item)
        {
            throw new NotImplementedException();
        }

        public void Notify(IMessage message)
        {
            throw new NotImplementedException();
        }
    }
}
