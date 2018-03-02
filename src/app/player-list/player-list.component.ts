import { PlayerService } from './../shared/services/player.service';
import { Player } from './../shared/models/player.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kickit-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    public selectedPlayer: Player;
    public players: Player[];
    public edit: boolean;

    constructor(
        private playerService: PlayerService
    ) { }

    ngOnInit() {
        this.playerService.getPlayers().subscribe(
            (result: Player[]) => {
                this.players = result;
            }
        );
    }

    public onSelect(player: Player) {
        if (player !== this.selectedPlayer) {
            this.selectedPlayer = player;
            this.edit = false;
        }
    }

    public editPlayer(player: Player) {
        this.edit = true;
    }

}
