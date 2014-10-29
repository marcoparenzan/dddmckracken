using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain
{
    public interface IDDDItem : IItem<IDDDItem>
    {
        void PushedBy(IDDDActor actor);
        void PulledBy(IDDDActor actor);
        void GivenBy(IDDDActor actor, IOtherActor target);
        void OpenedBy(IDDDActor actor);
        void ClosedBy(IDDDActor actor);
        void ReadBy(IDDDActor actor);
        void WalkedToBy(IDDDActor actor);
        void PickedUpBy(IDDDActor actor);
        void WhatIs(IDDDActor actor);
        void PutOnBy(IDDDActor actor);
        void TakenOffBy(IDDDActor actor);
        void UsedBy(IDDDActor actor);
        void TurnedOnBy(IDDDActor actor);
        void TurnedOffBy(IDDDActor actor);
    }
}
